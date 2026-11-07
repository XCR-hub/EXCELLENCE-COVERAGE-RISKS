export function nativeError(status,message){return Object.assign(new Error(message),{status});}
export function cookieValue(req,name){const part=(req.headers.cookie||'').split(';').map(v=>v.trim()).find(v=>v.startsWith(name+'='));return part?part.slice(name.length+1):'';}
export function appendCookie(res,value){const previous=res.getHeader('Set-Cookie');res.setHeader('Set-Cookie',previous?[].concat(previous,value):value);}
export async function asUser(pool,user,operation){
 const client=await pool.connect();
 try{await client.query('BEGIN');await client.query('SET LOCAL ROLE authenticated');await client.query("select set_config('request.jwt.claims',$1,true)",[JSON.stringify({role:'authenticated',sub:user.id,email:user.email})]);const result=await operation(client);await client.query('COMMIT');return result;}
 catch(error){await client.query('ROLLBACK').catch(()=>{});throw error;}finally{client.release();}
}
export function rowsResponse(req,res,json,rows,status=200){const object=String(req.headers.accept||'').includes('application/vnd.pgrst.object+json');if(object&&rows.length!==1)return json(res,406,{code:'PGRST116',message:'Une seule ligne est attendue'});return json(res,status,object?rows[0]:rows,{'Content-Range':rows.length?'0-'+(rows.length-1)+'/'+rows.length:'*/0'});}
export function exactFilter(url,key){const value=url.searchParams.get(key);return value?.startsWith('eq.')?value.slice(3):null;}
export const isUuid=value=>typeof value==='string'&&/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
