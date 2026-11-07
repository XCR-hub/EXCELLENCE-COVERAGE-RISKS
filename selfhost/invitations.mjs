import bcrypt from 'bcryptjs';
import {signToken,verifyToken,sha256} from './security.mjs';
import {cookieValue,appendCookie,exactFilter,rowsResponse,nativeError} from './native-context.mjs';
export function createInvitations({pool,secret,body,json,rate,issueSession,userById,sessionHeaders}){
 async function lookup(token){if(typeof token!=='string'||token.length<6||token.length>256)return null;return (await pool.query('select xcr_private.invitation_lookup($1) as invitation',[token])).rows[0]?.invitation;}
 async function rest(req,res,url,table,user){
  if(table!=='user_invitations')return false;
  if(req.method==='GET'){
   const token=exactFilter(url,'invitation_token')||exactFilter(url,'code');if(!token)return false;
   rate(req,'invitation-lookup',15);const invitation=await lookup(token);
   if(invitation){const proof=signToken({iss:'xcr-invitation',id:invitation.id,email:invitation.email,proof:sha256(invitation.invitation_token)},secret,1800);appendCookie(res,`XCR_INVITE=${proof}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=1800`);}
   rowsResponse(req,res,json,invitation?[invitation]:[]);return true;
  }
  if(req.method==='PATCH'&&user&&user.profile_role!=='admin'){
   const filter=exactFilter(url,'id')||exactFilter(url,'code')||exactFilter(url,'invitation_token');if(!filter)throw nativeError(403,'Invitation non autorisée');
   const data=await body(req);if(data.status!=='accepted'||Object.keys(data).some(k=>!['status','used_at','used_by','accepted_at'].includes(k)))throw nativeError(403,'Modification non autorisée');
   const invitation=(await pool.query('select xcr_private.own_accepted_invitation($1,$2) as invitation',[user.id,filter])).rows[0]?.invitation;
   if(!invitation)throw nativeError(403,'Invitation non autorisée');rowsResponse(req,res,json,[invitation]);return true;
  }
  return false;
 }
 async function signup(req,res){
  rate(req,'invitation-signup',8);const data=await body(req);const proof=verifyToken(cookieValue(req,'XCR_INVITE'),secret);
  if(!proof||proof.iss!=='xcr-invitation')throw nativeError(403,'Ouvrez votre lien d’invitation avant de créer votre compte');
  const email=String(data.email||'').trim().toLowerCase();if(email!==String(proof.email).toLowerCase())throw nativeError(403,'Cette invitation est liée à une autre adresse email');
  if(typeof data.password!=='string'||data.password.length<12||data.password.length>128)throw nativeError(400,'Choisissez un mot de passe de 12 à 128 caractères');
  const current=(await pool.query('select xcr_private.invitation_lookup_by_id($1) as invitation',[proof.id])).rows[0]?.invitation;
  if(!current||current.id!==proof.id||sha256(current.invitation_token)!==proof.proof)throw nativeError(403,'Invitation expirée ou révoquée');
  let id;try{id=(await pool.query('select xcr_private.invitation_accept($1,$2,$3,$4) as id',[current.id,current.invitation_token,email,await bcrypt.hash(data.password,12)])).rows[0].id;}catch(e){if(e.code==='23505')throw nativeError(409,'Ce compte existe déjà. Utilisez la connexion ou la récupération du mot de passe.');if(e.code==='22023')throw nativeError(403,'Invitation expirée ou invalide');throw e;}
  const user=await userById(id);const session=await issueSession(user);appendCookie(res,'XCR_INVITE=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0');
  const headers=sessionHeaders(session);appendCookie(res,headers['Set-Cookie']);json(res,200,session);return true;
 }
 async function mail(data,queueMail){const invitation=await lookup(data.invitationToken||data.code);if(!invitation||invitation.email.toLowerCase()!==String(data.to||'').toLowerCase())throw nativeError(404,'Invitation introuvable');const params=new URLSearchParams({token:invitation.invitation_token,...(invitation.code?{code:invitation.code}:{})});await queueMail(invitation.email,'Invitation à votre espace XCR',`Bonjour ${invitation.first_name},\nVotre accès personnel : https://xcr.fr/signup?${params}\nCe lien expire le ${new Date(invitation.expires_at).toLocaleDateString('fr-FR')}.`);return {success:true,queued:true};}
 return {rest,signup,mail};
}
