import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import pg from 'pg';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import {signToken,verifyToken,sha256,randomToken,sameSite,safeRedirect,safeFilePath} from './security.mjs';

const root=path.dirname(fileURLToPath(import.meta.url));
const secret=process.env.XCR_JWT_SECRET||'';
if(secret.length<40)throw Error('XCR_JWT_SECRET must contain at least 40 characters');
const pool=new pg.Pool({connectionString:process.env.XCR_DATABASE_URL,max:8,connectionTimeoutMillis:5000,statement_timeout:15000});
const restOrigin=process.env.XCR_REST_ORIGIN||'http://127.0.0.1:18897';
const staticRoot=path.join(root,'dist');
const limits=new Map();
const json=(res,status,data,headers={})=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',...headers});res.end(JSON.stringify(data));};
const fail=(status,message)=>Object.assign(new Error(message),{status});
const apiError=(res,e)=>json(res,e.status||500,{error:e.status?e.message:'Service temporairement indisponible',message:e.status?e.message:'Service temporairement indisponible'});
const userShape=u=>({id:u.id,aud:'authenticated',role:'authenticated',email:u.email,email_confirmed_at:u.email_confirmed_at,confirmed_at:u.email_confirmed_at,app_metadata:{provider:'email',providers:['email']},user_metadata:u.raw_user_meta_data||{},created_at:u.created_at,updated_at:u.updated_at,identities:[]});
async function body(req,max=256*1024){const chunks=[];let size=0;for await(const chunk of req){size+=chunk.length;if(size>max)throw fail(413,'Requête trop volumineuse');chunks.push(chunk);}const text=Buffer.concat(chunks).toString();if(!text)return {};try{return JSON.parse(text)}catch{throw fail(400,'JSON invalide');}}
function rate(req,key,max=15){const ip=req.headers['cf-connecting-ip']||req.socket.remoteAddress;const id=key+':'+ip;const now=Date.now();const old=limits.get(id);const entry=!old||old.until<now?{until:now+600000,count:0}:old;entry.count++;limits.set(id,entry);if(limits.size>5000)for(const [k,v]of limits)if(v.until<now)limits.delete(k);if(entry.count>max)throw fail(429,'Trop de tentatives. Réessayez plus tard.');}
async function userById(id){return (await pool.query('select * from xcr_private.user_lookup($1::uuid,null)',[id])).rows[0];}
async function currentUser(req,required=false){let token=(req.headers.authorization||'').replace(/^Bearer\s+/i,'');if(!token||token==='xcr-browser-public')token=(req.headers.cookie||'').split(';').map(v=>v.trim()).find(v=>v.startsWith('XCR_SESSION='))?.slice(12)||'';if(!token){if(required)throw fail(401,'Connexion requise');return null;}const claims=verifyToken(token,secret);if(!claims||claims.iss!=='xcr-native'||!claims.sub||!claims.sid)throw fail(401,'Session expirée');const result=await pool.query('select 1 from xcr_private.sessions where id=$1 and user_id=$2 and revoked_at is null and expires_at>now()',[claims.sid,claims.sub]);if(!result.rowCount)throw fail(401,'Session expirée');const user=await userById(claims.sub);if(!user||user.is_active===false||user.deleted_at||user.banned_until&&new Date(user.banned_until)>new Date())throw fail(403,'Compte indisponible');return {...user,session_id:claims.sid};}
const sessionHeaders=session=>({'Set-Cookie':`XCR_SESSION=${session.access_token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=3600`});
async function issueSession(user,existing){const refresh=randomToken(),id=existing||randomUUID();if(existing)await pool.query('update xcr_private.sessions set refresh_hash=$1,expires_at=now()+interval \'7 days\' where id=$2',[sha256(refresh),id]);else await pool.query('insert into xcr_private.sessions(id,user_id,refresh_hash,expires_at) values($1,$2,$3,now()+interval \'7 days\')',[id,user.id,sha256(refresh)]);return {access_token:signToken({iss:'xcr-native',sub:user.id,sid:id,role:'authenticated',aud:'authenticated',email:user.email},secret),token_type:'bearer',expires_in:3600,expires_at:Math.floor(Date.now()/1000)+3600,refresh_token:refresh,user:userShape(user)};}
async function queueMail(to,subject,text,html){await pool.query('insert into xcr_private.outbox(recipient,subject,body_text,body_html) values($1,$2,$3,$4)',[to,subject,text,html||null]);}
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
async function createLead(data,req){
 const source=data.formData||data;const email=String(data.email||source.email||'').trim().toLowerCase();
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))throw fail(400,'Adresse email requise');
 if(source.website||source.honeypot)throw fail(400,'Demande non valide');
 const first=String(data.firstName||source.first_name||source.firstName||source.nom||'').trim().slice(0,120),last=String(data.lastName||source.last_name||source.lastName||'').trim().slice(0,120);
 if(!first&&!last)throw fail(400,'Nom requis');
 const metadata={...(data.metadata||{}),ip:req.headers['cf-connecting-ip']||req.socket.remoteAddress,userAgent:String(req.headers['user-agent']||'').slice(0,500)};
 const result=await pool.query('select * from xcr_private.submit_lead($1::jsonb)',[JSON.stringify({...data,first_name:first||last,last_name:last||first,email,phone:data.phone||source.phone||source.telephone||null,message:data.message||source.message||null,form_type:data.formType||source.form_type||'contact',form_data:source,metadata})]);
 const lead=result.rows[0];await queueMail('contact@xcr.fr',`Demande xcr.fr ${lead.reference}`,`${first} ${last}\n${email}\n${data.phone||source.telephone||''}\n\n${data.message||source.message||''}`);
 return lead;
}
async function auth(req,res,url){const route=url.pathname.replace('/api/platform/auth/v1','');
 if(route==='/token'&&req.method==='POST'){
  rate(req,'login');const data=await body(req);let user,existing;
  if(url.searchParams.get('grant_type')==='refresh_token'){
   const session=(await pool.query('select id,user_id from xcr_private.sessions where refresh_hash=$1 and revoked_at is null and expires_at>now()',[sha256(String(data.refresh_token||''))])).rows[0];if(!session)throw fail(401,'Session expirée');existing=session.id;user=await userById(session.user_id);
  }else{user=(await pool.query('select * from xcr_private.user_lookup(null,$1)',[String(data.email||'').trim().toLowerCase()])).rows[0];if(!user||!await bcrypt.compare(String(data.password||''),user.encrypted_password||'$2b$12$JdPHrPzOHBrHGRYQQ7AtfO9wmbPxSlGzKiLB7iB6HOIT35.4Rbo3q'))throw fail(400,'Identifiants invalides');}
  if(!user||!user.email_confirmed_at||user.is_active===false||user.deleted_at||user.banned_until&&new Date(user.banned_until)>new Date())throw fail(403,'Compte indisponible');const session=await issueSession(user,existing);return json(res,200,session,sessionHeaders(session));
 }
 if(route==='/logout'){const user=await currentUser(req,true);await pool.query('update xcr_private.sessions set revoked_at=now() where id=$1',[user.session_id]);return json(res,200,{}, {'Set-Cookie':'XCR_SESSION=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0'});}
 if(route==='/user'){
  const user=await currentUser(req,true);
  if(req.method==='PUT'){const data=await body(req);if(data.email&&data.email.toLowerCase()!==user.email.toLowerCase())throw fail(400,'Contactez le cabinet pour modifier votre email');if(data.password){if(typeof data.password!=='string'||data.password.length<12)throw fail(400,'Utilisez un mot de passe de 12 caractères minimum');await pool.query('select xcr_private.change_password($1,$2)',[user.id,await bcrypt.hash(data.password,12)]);await pool.query('update xcr_private.sessions set revoked_at=now() where user_id=$1 and id<>$2',[user.id,user.session_id]);}}
  return json(res,200,userShape(await userById(user.id)));
 }
 if(route==='/recover'&&req.method==='POST'){
  rate(req,'recovery',5);const data=await body(req);const user=(await pool.query('select * from xcr_private.user_lookup(null,$1)',[String(data.email||'').trim().toLowerCase()])).rows[0];
  if(user){const token=randomToken();await pool.query('insert into xcr_private.auth_requests(token_hash,user_id,kind,redirect_to,expires_at) values($1,$2,\'recovery\',$3,now()+interval \'30 minutes\')',[sha256(token),user.id,safeRedirect(data.redirect_to||url.searchParams.get('redirect_to'))]);await queueMail(user.email,'Réinitialisation de votre accès XCR',`Pour choisir un nouveau mot de passe : https://xcr.fr/api/platform/auth/v1/verify?token=${token}&type=recovery`);}
  return json(res,200,{});
 }
 if(route==='/signup')throw fail(403,'L’inscription nécessite une invitation du cabinet');
 if(route==='/verify'&&req.method==='GET'){
  const token=url.searchParams.get('token')||'';const request=(await pool.query('update xcr_private.auth_requests set used_at=now() where token_hash=$1 and used_at is null and expires_at>now() returning *',[sha256(token)])).rows[0];if(!request)throw fail(400,'Lien expiré');const user=await userById(request.user_id);const session=await issueSession(user);const target=new URL(safeRedirect(request.redirect_to));target.hash=new URLSearchParams({access_token:session.access_token,refresh_token:session.refresh_token,token_type:'bearer',expires_in:'3600',type:'recovery'}).toString();res.writeHead(303,{Location:target.href,'Cache-Control':'no-store'});return res.end();
 }
 if(route==='/settings')return json(res,200,{external:{email:true},disable_signup:true,mailer_autoconfirm:false});
 throw fail(404,'Opération inconnue');
}
const publicReads=new Set(['blog_posts','cities','seo_articles','seo_faqs','seo_cities','seo_news','enterprise_seo_categories','enterprise_seo_articles','enterprise_seo_city_pages','enterprise_seo_faqs','enterprise_seo_news','internal_links','popup_configs','local_pages','faqs','seo_pages','professions','poles','products']);
const publicWrites=new Set(['page_analytics','lead_tracking_sessions','lead_interactions','partner_applications','form_submissions']);
const safeRpc=new Set(['get_leads_stats','get_quotes_stats','get_unread_emails_by_category','generate_invitation_token','increment_views','check_invitation_valid','accept_user_invitation']);
async function rest(req,res,url){
 const relative=url.pathname.replace('/api/platform/rest/v1/','');const table=relative.split('/')[0];const user=await currentUser(req);
 if(!/^[a-z_][a-z0-9_]*(?:\/[a-z_][a-z0-9_]*)?$/.test(relative))throw fail(404,'Ressource inconnue');
 if(table==='rpc'){
  const fn=relative.split('/')[1];if(!safeRpc.has(fn))throw fail(403,'Fonction non autorisée');if(!['increment_views','check_invitation_valid','accept_user_invitation'].includes(fn)&&user?.profile_role!=='admin')throw fail(403,'Accès administrateur requis');
 }else if(!user){
  if(table==='leads'&&req.method==='POST'){rate(req,'lead',12);const data=await body(req);const lead=await createLead(data,req);return json(res,201,req.headers.prefer?.includes('return=representation')?[lead]:null);}
  if(!(['GET','HEAD'].includes(req.method)?publicReads:publicWrites).has(table))throw fail(401,'Connexion requise');if(!['GET','HEAD','POST'].includes(req.method))throw fail(403,'Opération non autorisée');
 }
 let data;if(!['GET','HEAD'].includes(req.method)){data=await body(req);if(table==='profiles'&&['PATCH','POST'].includes(req.method)&&['role','is_active','id','email'].some(k=>Object.hasOwn(data,k))&&user?.profile_role!=='admin')throw fail(403,'Modification réservée à un administrateur');}
 const claims=user?{role:'authenticated',sub:user.id,email:user.email}:{role:'anon'};
 const headers={'Authorization':'Bearer '+signToken(claims,secret,60),'Content-Type':'application/json'};
 for(const key of ['accept','prefer','range','range-unit','if-match'])if(req.headers[key])headers[key]=req.headers[key];
 const upstream=await fetch(restOrigin+'/'+relative+url.search,{method:req.method,headers,body:data===undefined?undefined:JSON.stringify(data),signal:AbortSignal.timeout(20000)});
 res.writeHead(upstream.status,Object.fromEntries([...upstream.headers].filter(([k])=>['content-type','content-range','preference-applied','range-unit','location'].includes(k))));res.end(Buffer.from(await upstream.arrayBuffer()));
}
async function functions(req,res,url){const name=url.pathname.split('/').at(-1);if(req.method!=='POST')throw fail(405,'Méthode non autorisée');
 if(name==='submit-lead'){rate(req,'lead',12);const lead=await createLead(await body(req),req);return json(res,200,{success:true,id:lead.id,reference:lead.reference});}
 if(name==='ai-chatbot'){await body(req);return json(res,200,{response:'Votre demande peut être étudiée par notre équipe. Appelez le 01 80 85 57 81 ou écrivez à contact@xcr.fr pour une réponse personnalisée.'});}
 const user=await currentUser(req,true);if(user.profile_role!=='admin')throw fail(403,'Accès administrateur requis');const data=await body(req);
 if(name==='send-email-smtp'){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.to||'')||!String(data.subject||'').trim())throw fail(400,'Destinataire et objet requis');await queueMail(data.to,String(data.subject).slice(0,300),String(data.body_text||''),data.body_html);return json(res,202,{success:true,queued:true});}
 if(name==='send-invitation-email'){const record=(await pool.query('select * from xcr_private.find_invitation($1,$2)',[data.invitationToken,data.to])).rows[0];if(!record)throw fail(404,'Invitation introuvable');await queueMail(record.email,'Invitation à votre espace XCR',`Bonjour ${record.first_name||''},\nVotre invitation : https://xcr.fr/signup?token=${encodeURIComponent(record.invitation_token)}`);return json(res,202,{success:true,queued:true});}
 throw fail(501,'Cette automatisation doit être raccordée au moteur natif du cabinet');
}
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.json':'application/json; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8','.ico':'image/x-icon'};
const server=http.createServer(async(req,res)=>{
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('X-Frame-Options','DENY');res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');res.setHeader('X-XCR-Hosting','selfhost-cloudflare');
 try{
  const url=new URL(req.url,'http://localhost');
  if(req.headers.host==='www.xcr.fr'){res.writeHead(308,{Location:'https://xcr.fr'+url.pathname+url.search});return res.end();}
  if(!['GET','HEAD','OPTIONS'].includes(req.method)&&!sameSite(req.headers.origin))throw fail(403,'Origine non autorisée');
  if(req.method==='OPTIONS'){res.writeHead(204);return res.end();}
  if(url.pathname==='/health'){const result=(await pool.query('select * from xcr_private.health()')).rows[0];return json(res,200,{ok:true,site:'xcr.fr',platform:'native-postgresql',...result});}
  if(url.pathname.startsWith('/api/platform/auth/v1/'))return await auth(req,res,url);
  if(url.pathname.startsWith('/api/platform/rest/v1/'))return await rest(req,res,url);
  if(url.pathname.startsWith('/api/platform/functions/v1/'))return await functions(req,res,url);
  if(url.pathname.startsWith('/api/'))throw fail(404,'Ressource API inconnue');
  if(!['GET','HEAD'].includes(req.method))throw fail(405,'Méthode non autorisée');
  const decoded=safeFilePath(url.pathname);if(decoded===null)throw fail(404,'Fichier introuvable');
  let file=path.join(staticRoot,decoded);try{if(!(await fs.stat(file)).isFile())file=path.join(staticRoot,'index.html');}catch{if(path.extname(decoded))throw fail(404,'Fichier introuvable');file=path.join(staticRoot,'index.html');}
  const data=await fs.readFile(file);const type=mime[path.extname(file)]||'application/octet-stream';
  res.writeHead(200,{'Content-Type':type,'Content-Length':data.length,'Cache-Control':file.endsWith('index.html')||file.endsWith('sw.js')?'no-cache, no-store, must-revalidate':'public, max-age=300'});res.end(req.method==='HEAD'?undefined:data);
 }catch(e){if(!e.status)console.error(JSON.stringify({at:new Date().toISOString(),error:e.code||e.name,route:req.url?.split('?')[0]}));if(!res.headersSent)apiError(res,e);else res.end();}
});
let delivering=false;
async function deliverOutbox(){if(delivering||!process.env.XCR_SMTP_PASSWORD)return;delivering=true;let transport;try{transport=nodemailer.createTransport({host:process.env.XCR_SMTP_HOST||'mail.xcr.fr',port:Number(process.env.XCR_SMTP_PORT||465),secure:process.env.XCR_SMTP_SECURE!=='false',auth:{user:process.env.XCR_SMTP_USER||'contact@xcr.fr',pass:process.env.XCR_SMTP_PASSWORD},connectionTimeout:10000,socketTimeout:20000});const rows=(await pool.query("select * from xcr_private.outbox where status='pending' and attempts<5 and available_at<=now() order by created_at limit 5")).rows;for(const mail of rows){await pool.query('update xcr_private.outbox set attempts=attempts+1 where id=$1',[mail.id]);try{await transport.sendMail({from:process.env.XCR_SMTP_USER||'contact@xcr.fr',to:mail.recipient,subject:mail.subject,text:mail.body_text,html:mail.body_html||undefined});await pool.query("update xcr_private.outbox set status='sent',sent_at=now() where id=$1",[mail.id]);}catch{await pool.query("update xcr_private.outbox set available_at=now()+interval '15 minutes' where id=$1",[mail.id]);}}}catch{console.error('Native outbox temporarily unavailable');}finally{transport?.close();delivering=false;}}
const timer=setInterval(deliverOutbox,30000);timer.unref();
server.listen(Number(process.env.XCR_PORT||18896),process.env.XCR_HOST||'127.0.0.1',()=>console.log('XCR native site started'));
process.on('SIGTERM',()=>server.close(()=>pool.end().finally(()=>process.exit(0))));
