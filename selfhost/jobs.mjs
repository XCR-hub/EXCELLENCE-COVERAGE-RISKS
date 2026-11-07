import {nativeError,isUuid} from './native-context.mjs';
export function createJobs({pool,userById,intelligence}){
 let running=false,stopped=false;
 async function enqueue(operation,data,user){if(!['article','faq','city','classify','queue'].includes(operation))throw nativeError(400,'Opération IA inconnue');const row=(await pool.query("insert into xcr_private.ai_jobs(user_id,operation,payload) select $1,$2,$3::jsonb where (select count(*) from xcr_private.ai_jobs where status in ('pending','processing'))<10 returning id",[user.id,operation,JSON.stringify(data)])).rows[0];if(!row)throw nativeError(429,'La file IA est pleine. Réessayez plus tard.');return {success:true,queued:true,job_id:row.id};}
 async function status(id,user){if(!isUuid(id))throw nativeError(404,'Traitement introuvable');const job=(await pool.query('select id,status,result,error_message,created_at,started_at,finished_at from xcr_private.ai_jobs where id=$1 and user_id=$2',[id,user.id])).rows[0];if(!job)throw nativeError(404,'Traitement introuvable');return job;}
 async function work(){if(running||stopped)return;running=true;let lock,job;
  try{lock=await pool.connect();if(!(await lock.query("select pg_try_advisory_lock(hashtext('xcr-native-ai-worker')) as ok")).rows[0].ok)return;
   await lock.query("update xcr_private.ai_jobs set status='failed',error_message='Traitement interrompu. Relancez la génération.',finished_at=now() where status='processing'");
   job=(await lock.query("update xcr_private.ai_jobs set status='processing',started_at=now() where id=(select id from xcr_private.ai_jobs where status='pending' order by created_at for update skip locked limit 1) returning *")).rows[0];if(!job)return;
   const user=await userById(job.user_id);if(!user||user.profile_role!=='admin'||user.is_active===false)throw nativeError(403,'Compte administrateur indisponible');
   const result=job.operation==='classify'?await intelligence.classify(job.payload,user):job.operation==='queue'?await intelligence.queue(user):await intelligence.content(job.operation,job.payload,user);
   await lock.query("update xcr_private.ai_jobs set status='completed',result=$2::jsonb,finished_at=now() where id=$1",[job.id,JSON.stringify(result)]);
  }catch(error){if(job)await pool.query("update xcr_private.ai_jobs set status='failed',error_message=$2,finished_at=now() where id=$1",[job.id,error.status?error.message:'Service temporairement indisponible']);}
  finally{if(lock){await lock.query("select pg_advisory_unlock(hashtext('xcr-native-ai-worker'))").catch(()=>{});lock.release();}running=false;}
 }
 const timer=setInterval(work,2000);timer.unref();
 return {enqueue,status,stop(){stopped=true;clearInterval(timer);}};
}
