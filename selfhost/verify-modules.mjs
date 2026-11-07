// Run only against the isolated module validation database, never production.
import fs from 'node:fs/promises';
import {writeFileSync} from 'node:fs';
import pg from 'pg';
import {spawn} from 'node:child_process';
import {randomUUID,randomBytes} from 'node:crypto';
import assert from 'node:assert/strict';
import {ImapFlow} from 'imapflow';
const config=JSON.parse(await new Promise(resolve=>{let s='';process.stdin.on('data',d=>s+=d);process.stdin.on('end',()=>resolve(s));}));
const database='xcr_site_modules_qa_20261107';
const admin=new pg.Client({host:'127.0.0.1',user:'postgres',password:config.postgres_password,database});await admin.connect();
const report={at:new Date().toISOString(),database,checks:[],emails_sent:0};
const key=randomBytes(48).toString('hex'),password=randomBytes(20).toString('hex');
let child;
const check=(name)=>{report.checks.push(name);writeFileSync('F:/XCR-Site/modules-verification.json',JSON.stringify({...report,status:'running'},null,2));};
try{
 for(const file of ['database.sql','modules.sql'])await admin.query(await fs.readFile(new URL(file,import.meta.url),'utf8'));
 const adminId=randomUUID(),token=randomBytes(32).toString('hex');
 await admin.query("insert into public.user_invitations(id,email,first_name,last_name,role,invitation_token,status,expires_at,code) values($1,$2,'QA','Native','admin',$3,'pending',now()+interval '1 hour',$4)",[adminId,adminId+'@example.invalid',token,token.slice(0,12)]);
 const env={...process.env,XCR_DATABASE_URL:`postgres://xcr_site_web:${config.web_password}@127.0.0.1:5432/${database}`,XCR_JWT_SECRET:key,XCR_PORT:'18898',XCR_HOST:'127.0.0.1',XCR_REST_ORIGIN:'http://127.0.0.1:18899',XCR_STORAGE_ROOT:'F:/XCR-Site/candidate-modules/qa-documents',XCR_DISABLE_MAIL_DELIVERY:'true',XCR_LOCAL_AI_URL:config.local_ai_url,XCR_LOCAL_AI_KEY:config.local_ai_api_key,XCR_LOCAL_AI_MODEL:config.local_ai_model};
 child=spawn(process.execPath,['server.mjs'],{cwd:new URL('.',import.meta.url),env,windowsHide:true,stdio:['ignore','ignore','pipe']});let serverError='';child.stderr.on('data',d=>serverError+=String(d));
 const call=async(path,method='GET',data,cookie='',auth='xcr-browser-public')=>{const headers={Origin:'https://xcr.fr',Authorization:'Bearer '+auth,...(cookie?{Cookie:cookie}:{}),...(data===undefined?{}:{'Content-Type':'application/json'})};const response=await fetch('http://127.0.0.1:18898/api/platform/'+path,{method,headers,body:data===undefined?undefined:JSON.stringify(data),signal:AbortSignal.timeout(95000)});const raw=await response.text();let json;try{json=JSON.parse(raw);}catch{}return {status:response.status,json,raw,cookies:response.headers.getSetCookie().map(x=>x.split(';')[0]).join('; ')};};
  const waitJob=async id=>{for(let i=0;i<100;i++){const job=await call('jobs/v1/'+id,'GET',undefined,'',access);assert.equal(job.status,200,job.raw);if(job.json.status==='completed')return job.json.result;if(job.json.status==='failed')throw Error(job.json.error_message);await new Promise(r=>setTimeout(r,2500));}throw Error('AI job validation timeout');};
 for(let n=0;n<40;n++){try{if((await fetch('http://127.0.0.1:18898/health')).ok)break;}catch{}await new Promise(r=>setTimeout(r,250));if(n===39)throw Error('QA server startup failed '+serverError);}
 assert.equal((await call('auth/v1/signup','POST',{email:'uninvited@example.invalid',password})).status,403);check('open registration denied');
 const proof=await call('rest/v1/user_invitations?invitation_token=eq.'+token);assert.equal(proof.status,200);assert.ok(proof.cookies.includes('XCR_INVITE='));
 const signup=await call('auth/v1/signup','POST',{email:adminId+'@example.invalid',password,data:{role:'client'}},proof.cookies);assert.equal(signup.status,200,signup.raw);const user=signup.json.user;const access=signup.json.access_token;
 assert.equal((await admin.query('select role from public.profiles where id=$1',[user.id])).rows[0].role,'admin');
 assert.equal((await call('auth/v1/signup','POST',{email:adminId+'@example.invalid',password},proof.cookies)).status,403);check('invitation signup uses stored role and rejects reuse');
 const expired=randomBytes(32).toString('hex');await admin.query("insert into public.user_invitations(email,first_name,last_name,role,invitation_token,status,expires_at) values($1,'QA','Expired','admin',$2,'pending',now()-interval '1 hour')",[expired+'@example.invalid',expired]);assert.deepEqual((await call('rest/v1/user_invitations?invitation_token=eq.'+expired)).json,[]);check('expired invitation rejected');
 const prospects=[];for(let n=0;n<2;n++){const id=randomUUID(),portalToken=randomBytes(32).toString('hex');await admin.query("insert into public.prospects(id,email,first_name,last_name,access_token,status,token_expires_at) values($1,$2,'QA','Portal',$3,'active',now()+interval '1 hour')",[id,id+'@example.invalid',portalToken]);const opened=await call('rest/v1/prospects?access_token=eq.'+portalToken);assert.equal(opened.status,200,opened.raw);prospects.push({id,cookie:opened.cookies,token:portalToken});}
 const uploadPath=prospects[0].id+'/validation.pdf',bytes=Buffer.from('%PDF-1.4\nNative validation\n%%EOF');
 const uploaded=await fetch('http://127.0.0.1:18898/api/platform/storage/v1/object/prospect-documents/'+uploadPath,{method:'POST',headers:{Origin:'https://xcr.fr',Cookie:prospects[0].cookie,'Content-Type':'application/pdf'},body:bytes});assert.equal(uploaded.status,200,await uploaded.text());
 const filePath='storage/v1/object/public/prospect-documents/'+uploadPath;
 assert.equal((await call(filePath)).status,401);assert.equal((await call(filePath,'GET',undefined,prospects[1].cookie)).status,403);assert.equal((await call(filePath,'GET',undefined,prospects[0].cookie)).status,200);
 const doc=await call('rest/v1/prospect_documents','POST',{prospect_id:prospects[0].id,document_type:'identity',file_url:'https://xcr.fr/api/platform/'+filePath},prospects[0].cookie);assert.equal(doc.status,201,doc.raw);
 assert.equal((await call('rest/v1/prospect_documents?prospect_id=eq.'+prospects[0].id,'GET',undefined,prospects[1].cookie)).status,403);check('portal upload and cross-prospect isolation');
 const signed=await call('storage/v1/object/sign/prospect-documents/'+uploadPath,'POST',{expiresIn:60},prospects[0].cookie);assert.equal(signed.status,200,signed.raw);const signedPath='storage/v1'+signed.json.signedURL;assert.equal((await call(signedPath)).status,200);check('bounded signed document download');
 await admin.query("update public.prospects set status='blocked' where id=$1",[prospects[0].id]);assert.equal((await call(filePath,'GET',undefined,prospects[0].cookie)).status,401);check('revoked portal loses document access');
 const quote=randomUUID();await admin.query("insert into public.prospect_quotes(id,prospect_id,quote_number,product_type,status,valid_until) values($1,$2,$3,'auto','sent',current_date-1)",[quote,prospects[1].id,quote]);assert.equal((await call('rest/v1/prospect_quotes?id=eq.'+quote,'PATCH',{status:'accepted'},prospects[1].cookie)).status,404);check('expired quote cannot be accepted');
 assert.equal((await call('rest/v1/leads?select=id')).status,401);assert.equal((await call('functions/v1/sync-ionos-imap','POST',{})).status,401);check('private data and mail import require authentication');
 if(!config.focus_generation){const chat=await call('functions/v1/ai-chatbot','POST',{message:'Comment contacter XCR ?'});assert.equal(chat.status,200,chat.raw);assert.ok(chat.json.response.length>5);check('real local AI chatbot');}
 if(!config.focus_generation){const emailId=randomUUID();await admin.query("insert into public.email_messages(id,message_id,from_email,to_emails,subject,body_text,received_at) values($1,$2,'qa@example.invalid',array['qa@example.invalid'],'Demande de renseignements','Bonjour, pourriez-vous me rappeler pour une étude de contrat ?',now())",[emailId,emailId]);const classified=await call('functions/v1/ai-email-classifier','POST',{email_id:emailId},'',access);assert.equal(classified.status,202,classified.raw);await waitJob(classified.json.job_id);check('real local AI email classification through persistent queue');}
 const imap=new ImapFlow({host:'mail.xcr.fr',port:993,secure:true,auth:{user:'contact@xcr.fr',pass:config.smtp_password},logger:false,connectionTimeout:10000,socketTimeout:15000});imap.on('error',()=>{});try{await imap.connect();const box=await imap.mailboxOpen('INBOX',{readOnly:true});assert.equal(box.readOnly,true);check('IMAP authentication and read-only mailbox access');}finally{await imap.logout().catch(()=>imap.close());}
 const article=await call('functions/v1/generate-article','POST',{topic:'Préparer les informations pour une demande de devis',tone:'professional'},'',access);assert.equal(article.status,202,article.raw);const generated=await waitJob(article.json.job_id);assert.equal((await admin.query('select status from public.seo_articles where id=$1',[generated.id])).rows[0].status,'draft');check('AI article stored as unpublished draft');
 report.status='passed';
}catch(error){report.status='failed';report.error=String(error.message).slice(0,1600);}
finally{if(child&&child.exitCode===null){const stopped=new Promise(r=>child.once('exit',r));child.kill();await stopped;}await admin.end();await fs.writeFile('F:/XCR-Site/modules-verification.json',JSON.stringify(report,null,2));}
if(report.status!=='passed')process.exitCode=1;
