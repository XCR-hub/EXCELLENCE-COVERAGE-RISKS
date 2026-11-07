import {ImapFlow} from 'imapflow';
import {simpleParser} from 'mailparser';
import sanitizeHtml from 'sanitize-html';
import {randomUUID} from 'node:crypto';
import {asUser,nativeError} from './native-context.mjs';

export function cleanMailHtml(value){return sanitizeHtml(String(value||''),{allowedTags:['p','br','div','span','strong','b','em','i','ul','ol','li','blockquote','table','thead','tbody','tr','td','th','a'],allowedAttributes:{a:['href','title']},allowedSchemes:['https','mailto'],allowProtocolRelative:false,transformTags:{a:(_tag,attrs)=>({tagName:'a',attribs:{...attrs,rel:'noopener noreferrer',target:'_blank'}})}});}
export function createMailImport({pool,documents}){
 let busy=false;
 async function sync(data,user){
  if(busy)throw nativeError(409,'Un import est déjà en cours');
  if(!process.env.XCR_IMAP_PASSWORD)throw nativeError(503,'La boîte mail n’est pas configurée');
  const folder=String(data.folder||'INBOX');if(folder!=='INBOX')throw nativeError(400,'Seule la boîte de réception est importable');
  const limit=Math.max(1,Math.min(50,Number(data.limit)||50)),days=Math.max(1,Math.min(90,Number(data.since_days)||7));
  const mailbox=process.env.XCR_IMAP_USER||'contact@xcr.fr';
  const client=new ImapFlow({host:process.env.XCR_IMAP_HOST||'mail.xcr.fr',port:993,secure:true,auth:{user:mailbox,pass:process.env.XCR_IMAP_PASSWORD},logger:false,disableAutoIdle:true,connectionTimeout:10000,greetingTimeout:10000,socketTimeout:25000});
  client.on('error',()=>{});
  busy=true;const timeout=setTimeout(()=>client.close(),55000);let imported=0,skipped=0,rejected=0;
  try{
   await client.connect();const box=await client.mailboxOpen(folder,{readOnly:true});
   const validity=String(box.uidValidity);const found=await client.search({since:new Date(Date.now()-days*86400000)},{uid:true});
   const known=new Set((await pool.query('select uid::text from xcr_private.mail_imports where mailbox=$1 and folder=$2 and uid_validity=$3',[mailbox,folder,validity])).rows.map(r=>r.uid));
   const pending=found.filter(uid=>!known.has(String(uid))).reverse().slice(0,limit);
   for(const uid of pending){
    const metadata=await client.fetchOne(String(uid),{size:true},{uid:true});if(!metadata||metadata.size>25*1024*1024){rejected++;continue;}
    const message=await client.fetchOne(String(uid),{source:true,flags:true,internalDate:true},{uid:true});
    if(!message?.source){skipped++;continue;}if(message.source.length>25*1024*1024){rejected++;continue;}
    const parsed=await simpleParser(message.source,{skipHtmlToText:false,skipTextToHtml:true});const from=parsed.from?.value?.[0];if(!from?.address){rejected++;continue;}
    const id=randomUUID(),attachments=[];
    for(const [index,file]of (parsed.attachments||[]).entries()){
     try{const filename=file.filename||'piece-jointe.bin';const object=await documents.persist({bucket:'mail-attachments',key:id+'/'+index+'-'+filename.replace(/[^\p{L}\p{N}._-]/gu,'_'),filename,bytes:file.content,user});attachments.push({filename:object.filename,size:Number(object.size),contentType:object.mime_type,url:'/api/platform/storage/v1/object/public/mail-attachments/'+object.object_key.split('/').map(encodeURIComponent).join('/')});}
     catch(error){if(!error.status)throw error;attachments.push({filename:String(file.filename||'pièce jointe').slice(0,255),size:file.size,status:'rejected'});}
    }
    const addresses=v=>(Array.isArray(v)?v:[v]).flatMap(x=>x?.value||[]).map(x=>x.address).filter(Boolean);
    const inserted=await asUser(pool,user,async db=>{
     await db.query('select pg_advisory_xact_lock(hashtext($1))',[mailbox+':'+folder+':'+validity+':'+uid]);
     // The private dedup marker is written on the same connection after RESET ROLE.
     await db.query('RESET ROLE');
     if((await db.query('select 1 from xcr_private.mail_imports where mailbox=$1 and folder=$2 and uid_validity=$3 and uid=$4',[mailbox,folder,validity,uid])).rowCount)return false;
     await db.query('SET LOCAL ROLE authenticated');
     await db.query(`insert into public.email_messages(id,message_id,from_email,from_name,to_emails,cc_emails,subject,body_text,body_html,snippet,attachments,is_read,received_at,in_reply_to) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11::jsonb,$12,$13,$14)`,[id,parsed.messageId||`${mailbox}:${validity}:${uid}`,from.address,from.name||null,addresses(parsed.to),addresses(parsed.cc),String(parsed.subject||'(sans objet)').slice(0,500),String(parsed.text||'').slice(0,1000000),cleanMailHtml(parsed.html).slice(0,1000000),String(parsed.text||'').replace(/\s+/g,' ').slice(0,240),JSON.stringify(attachments),message.flags?.has('\\Seen')||false,parsed.date||message.internalDate||new Date(),parsed.inReplyTo||null]);
     await db.query('RESET ROLE');await db.query('insert into xcr_private.mail_imports(mailbox,folder,uid_validity,uid,email_id) values($1,$2,$3,$4,$5)',[mailbox,folder,validity,uid,id]);return true;
    });if(inserted)imported++;else skipped++;
   }
   return {success:true,results:{new_emails:imported,skipped,rejected,remaining:Math.max(0,found.length-known.size-pending.length)},read_only:true};
  }finally{clearTimeout(timeout);await client.logout().catch(()=>client.close());busy=false;}
 }
 return {sync};
}
