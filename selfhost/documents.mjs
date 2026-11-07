import fs from 'node:fs/promises';
import path from 'node:path';
import {randomUUID,createHash} from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {signToken,verifyToken} from './security.mjs';
import {asUser,cookieValue,appendCookie,exactFilter,rowsResponse,nativeError,isUuid} from './native-context.mjs';
const runFile=promisify(execFile);
const MAX=20*1024*1024;
const types={pdf:'application/pdf',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',doc:'application/msword',docx:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',xls:'application/vnd.ms-excel',xlsx:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',txt:'text/plain'};
export function safeObjectKey(value){if(typeof value!=='string'||value.length>600||value.includes('\\')||/[\0-\x1f\x7f]/.test(value)||value.startsWith('/')||value.split('/').some(p=>!p||p==='.'||p==='..'))throw nativeError(400,'Chemin de document invalide');return value.normalize('NFC');}
export function validateDocument(filename,bytes){
 const ext=filename.split('.').at(-1)?.toLowerCase(),mime=types[ext];if(!mime||!bytes.length||bytes.length>MAX)throw nativeError(400,'Type ou taille de document non autorisé');
 let valid=false;
 if(ext==='pdf')valid=bytes.subarray(0,1024).includes(Buffer.from('%PDF-'));
 if(ext==='png')valid=bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]));
 if(ext==='jpg'||ext==='jpeg')valid=bytes[0]===255&&bytes[1]===216&&bytes[2]===255;
 if(ext==='docx'||ext==='xlsx')valid=bytes[0]===80&&bytes[1]===75&&bytes[2]===3&&bytes[3]===4;
 if(ext==='doc'||ext==='xls')valid=bytes.subarray(0,8).equals(Buffer.from([208,207,17,224,161,177,26,225]));
 if(ext==='txt')valid=!bytes.includes(0)&&!/^\s*<(?:!doctype\s+html|html|script|svg)/i.test(bytes.toString('utf8',0,256));
 if(!valid)throw nativeError(400,'Le contenu du fichier ne correspond pas à son format');return mime;
}
async function readUpload(req){let length=0;const chunks=[];for await(const chunk of req){length+=chunk.length;if(length>MAX+65536)throw nativeError(413,'Le fichier dépasse 20 Mo');chunks.push(chunk);}const bytes=Buffer.concat(chunks);if(String(req.headers['content-type']).startsWith('multipart/form-data')){const form=await new Response(bytes,{headers:{'Content-Type':req.headers['content-type']}}).formData();const files=[...form.values()].filter(v=>v instanceof Blob);if(files.length!==1)throw nativeError(400,'Un seul fichier est attendu');return {bytes:Buffer.from(await files[0].arrayBuffer()),filename:files[0].name};}return {bytes,filename:null};}
export function createDocuments({pool,secret,currentUser,json,body,rate,restOrigin,storageRoot=process.env.XCR_STORAGE_ROOT||'F:/XCR-Site/documents'}){
 const root=path.resolve(storageRoot);let uploading=0;
 async function portal(req){const claims=verifyToken(cookieValue(req,'XCR_PORTAL'),secret);if(!claims||claims.iss!=='xcr-portal')return null;const rows=(await pool.query("select xcr_private.portal_read($1,'prospects') as rows",[claims.token])).rows[0]?.rows;return rows?.[0]?.id===claims.sub?{...rows[0],token:claims.token}:null;}
 async function principal(req){let user;try{user=await currentUser(req);}catch(e){if(e.status!==401)throw e;}const prospect=await portal(req);if(!user&&!prospect)throw nativeError(401,'Connexion ou lien prospect requis');return {user,prospect};}
 async function authorize(meta,actor){if(actor.user?.profile_role==='admin'||meta.owner_user_id===actor.user?.id||meta.prospect_id&&meta.prospect_id===actor.prospect?.id)return true;throw nativeError(403,'Vous ne pouvez pas accéder à ce document');}
 async function scan(file){const executable=process.env.XCR_CLAMSCAN_PATH;if(!executable)return;try{await runFile(executable,['--no-summary','--stdout',...(process.env.XCR_CLAMAV_DB?['--database',process.env.XCR_CLAMAV_DB]:[]),file],{windowsHide:true,timeout:45000,maxBuffer:65536});}catch(e){throw nativeError(e.code===1?422:503,e.code===1?'Le contrôle antivirus a refusé ce document':'Le contrôle documentaire est temporairement indisponible');}}
 async function persist({bucket,key,filename,bytes,user,prospect,upsert=false}){
  if(!['documents','prospect-documents','mail-attachments'].includes(bucket))throw nativeError(400,'Espace documentaire inconnu');key=safeObjectKey(key);
  if(prospect&&(!key.startsWith(prospect.id+'/')||bucket!=='prospect-documents'))throw nativeError(403,'Document hors de votre espace');
  if(bucket==='mail-attachments'&&user?.profile_role!=='admin')throw nativeError(403,'Accès réservé au cabinet');
  const name=String(filename||key.split('/').at(-1)).split(/[\\/]/).at(-1).replace(/[\0-\x1f\x7f]/g,'').slice(0,255);const mime=validateDocument(name,bytes);
  const old=(await pool.query('select * from xcr_private.storage_objects where bucket=$1 and object_key=$2 and deleted_at is null',[bucket,key])).rows[0];
  if(old){await authorize(old,{user,prospect});if(!upsert)throw nativeError(409,'Ce document existe déjà');}
  const id=randomUUID(),blob=id+'.blob',file=path.join(root,blob);if(path.dirname(file)!==root)throw nativeError(400,'Chemin invalide');
  await fs.mkdir(root,{recursive:true});await fs.writeFile(file,bytes,{flag:'wx'});
  const db=await pool.connect();try{await scan(file);await db.query('BEGIN');if(old)await db.query('update xcr_private.storage_objects set deleted_at=now() where id=$1',[old.id]);const row=(await db.query('insert into xcr_private.storage_objects(id,bucket,object_key,blob_name,filename,mime_type,size,sha256,owner_user_id,prospect_id) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *',[id,bucket,key,blob,name,mime,bytes.length,createHash('sha256').update(bytes).digest('hex'),user?.id||null,prospect?.id||null])).rows[0];await db.query('COMMIT');return row;}catch(e){await db.query('ROLLBACK').catch(()=>{});await fs.unlink(file).catch(()=>{});throw e;}finally{db.release();}
 }
 async function rest(req,res,url,table,user){
  if(!['prospects','prospect_documents','prospect_quotes'].includes(table))return false;
  const token=table==='prospects'&&req.method==='GET'?exactFilter(url,'access_token'):null;
  if(token){rate(req,'prospect-link',25);if(token.length<16||token.length>256)throw nativeError(403,'Lien prospect invalide');const rows=(await pool.query("select xcr_private.portal_read($1,'prospects') as rows",[token])).rows[0]?.rows;
   if(rows?.length){appendCookie(res,`XCR_PORTAL=${signToken({iss:'xcr-portal',sub:rows[0].id,token},secret,3600)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=3600`);}rowsResponse(req,res,json,rows||[]);return true;
  }
  if(user?.profile_role==='admin')return false;const actor=await portal(req);if(!actor)return false;
  const filter=exactFilter(url,table==='prospects'?'id':'prospect_id');if(filter&&filter!==actor.id)throw nativeError(403,'Accès à un autre dossier interdit');
  if(['GET','HEAD'].includes(req.method)){const rows=(await pool.query('select xcr_private.portal_read($1,$2) as rows',[actor.token,table])).rows[0]?.rows;rowsResponse(req,res,json,rows||[]);return true;}
  if(!['PATCH','POST'].includes(req.method)||req.method==='POST'&&table!=='prospect_documents')throw nativeError(403,'Opération non autorisée');
  const value=await body(req);if(Array.isArray(value))throw nativeError(400,'Un document est attendu');const target=exactFilter(url,'id');if(req.method==='PATCH'&&!isUuid(target))throw nativeError(400,'Identifiant requis');
  if(table==='prospects'&&(target!==actor.id||Object.keys(value).some(k=>k!=='last_access_at')))throw nativeError(403,'Modification non autorisée');
  if(table==='prospect_quotes'&&Object.keys(value).some(k=>!['status','viewed_at','response_at'].includes(k)))throw nativeError(403,'Modification du devis non autorisée');
  if(table==='prospect_documents'){
   if(value.prospect_id&&value.prospect_id!==actor.id)throw nativeError(403,'Document hors de votre dossier');
   const fileUrl=new URL(String(value.file_url||''),'https://xcr.fr');if(!['xcr.fr','localhost','127.0.0.1'].includes(fileUrl.hostname))throw nativeError(400,'Document externe non autorisé');
   const prefix='/api/platform/storage/v1/object/public/prospect-documents/';if(!fileUrl.pathname.startsWith(prefix))throw nativeError(400,'Document natif requis');
   const key=safeObjectKey(decodeURIComponent(fileUrl.pathname.slice(prefix.length)));const obj=(await pool.query("select * from xcr_private.storage_objects where bucket='prospect-documents' and object_key=$1 and prospect_id=$2 and deleted_at is null",[key,actor.id])).rows[0];if(!obj)throw nativeError(403,'Le fichier ne correspond pas à votre dossier');value._object_id=obj.id;
  }
  try{const rows=(await pool.query('select xcr_private.portal_change($1,$2,$3,$4::jsonb) as rows',[actor.token,table,target||null,JSON.stringify(value)])).rows[0]?.rows;rowsResponse(req,res,json,rows||[],req.method==='POST'?201:200);}catch(e){if(e.code==='42501')throw nativeError(403,'Accès non autorisé ou lien expiré');if(e.code==='P0002')throw nativeError(404,'Document ou devis introuvable');throw e;}return true;
 }
 async function handle(req,res,url){
  if(!url.pathname.startsWith('/api/platform/storage/v1/'))return false;
  const parts=url.pathname.slice('/api/platform/storage/v1/'.length).split('/').map(decodeURIComponent);
  if(parts.shift()!=='object')throw nativeError(404,'Ressource documentaire inconnue');
  let mode='';if(['public','authenticated','sign','list'].includes(parts[0]))mode=parts.shift();const bucket=parts.shift();if(!['documents','prospect-documents','mail-attachments'].includes(bucket))throw nativeError(400,'Espace documentaire inconnu');
  const signed=mode==='sign'&&req.method==='GET'?verifyToken(url.searchParams.get('token')||'',secret):null;
  const actor=signed?.iss==='xcr-storage'?null:await principal(req);
  if(mode==='list'&&req.method==='POST'){const data=await body(req);const rows=(await pool.query('select * from xcr_private.storage_objects where bucket=$1 and object_key like $2 and deleted_at is null order by created_at desc limit 100',[bucket,String(data.prefix||'').replace(/[\\%_]/g,'\\$&')+'%'])).rows;const allowed=[];for(const row of rows)try{await authorize(row,actor);allowed.push({name:row.object_key,id:row.id,created_at:row.created_at,metadata:{size:Number(row.size),mimetype:row.mime_type}})}catch{};json(res,200,allowed);return true;}
  if(req.method==='DELETE'){
   const data=await body(req);if(!Array.isArray(data.prefixes)||data.prefixes.length>100)throw nativeError(400,'Liste de fichiers invalide');const objects=[];for(const key of data.prefixes){const meta=(await pool.query('select * from xcr_private.storage_objects where bucket=$1 and object_key=$2 and deleted_at is null',[bucket,safeObjectKey(key)])).rows[0];if(meta){await authorize(meta,actor);objects.push(meta);}}
   for(const meta of objects)await pool.query('update xcr_private.storage_objects set deleted_at=now() where id=$1',[meta.id]);json(res,200,objects.map(v=>({name:v.object_key,id:v.id})));return true;
  }
  const key=safeObjectKey(parts.join('/'));
  if(['POST','PUT'].includes(req.method)&&!mode){rate(req,'document-upload',30);if(uploading>=4)throw nativeError(429,'Des documents sont déjà en cours de traitement');uploading++;try{const data=await readUpload(req);const object=await persist({bucket,key,filename:data.filename||key.split('/').at(-1),bytes:data.bytes,...actor,upsert:req.headers['x-upsert']==='true'});json(res,200,{Id:object.id,id:object.id,Key:bucket+'/'+key,path:key,fullPath:bucket+'/'+key});}finally{uploading--;}return true;}
  const object=(await pool.query('select * from xcr_private.storage_objects where bucket=$1 and object_key=$2 and deleted_at is null',[bucket,key])).rows[0];if(!object)throw nativeError(404,'Document introuvable');
  if(signed){if(signed.iss!=='xcr-storage'||signed.object!==object.id||signed.digest!==object.sha256)throw nativeError(403,'Lien de téléchargement invalide');}else await authorize(object,actor);
  if(mode==='sign'&&req.method==='POST'){const data=await body(req);const expiry=Math.min(3600,Math.max(1,Number(data.expiresIn)||60));const token=signToken({iss:'xcr-storage',object:object.id,digest:object.sha256},secret,expiry);json(res,200,{signedURL:'/object/sign/'+bucket+'/'+key.split('/').map(encodeURIComponent).join('/')+'?token='+token});return true;}
  if(!['GET','HEAD'].includes(req.method))throw nativeError(405,'Méthode non autorisée');
  const file=path.resolve(root,object.blob_name);if(path.dirname(file)!==root)throw nativeError(404,'Document introuvable');const bytes=await fs.readFile(file);if(createHash('sha256').update(bytes).digest('hex')!==object.sha256)throw nativeError(503,'Le contrôle d’intégrité du document a échoué');
  res.writeHead(200,{'Content-Type':object.mime_type,'Content-Length':bytes.length,'Content-Disposition':"attachment; filename*=UTF-8''"+encodeURIComponent(object.filename),'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff','Content-Security-Policy':"sandbox; default-src 'none'"});res.end(req.method==='HEAD'?undefined:bytes);return true;
 }
 return {handle,rest,persist,portal};
}
