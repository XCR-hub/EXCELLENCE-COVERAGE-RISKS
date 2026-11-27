import {rewriteProductClaims} from './product-claims.mjs';
import {rewriteProductMetadata} from './product-metadata.mjs';
import {rewritePartnerLandingSeo} from './partner-seo.mjs';
import {rewritePublicReception,rewriteHomeResponseTimes,rewriteHomeClaims} from './reception-seo.mjs';
import {rewriteContactSeo} from './contact-seo.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const root=path.dirname(fileURLToPath(import.meta.url));
const source=path.join(root,'recovered'),target=path.join(root,'dist');
if(path.resolve(target)!==path.resolve(root,'dist')||!target.startsWith(root+path.sep))throw Error('Unsafe build output path');
await fs.rm(target,{recursive:true,force:true});
await fs.mkdir(target,{recursive:true});
await fs.cp(source,target,{recursive:true});
const oldOrigin='https://cfuzzizrfiqzxfmnqybu.supabase.co';
const recoveredEntry='index-102eaf97.js';
const recoveredEntryPath=path.join(target,'assets',recoveredEntry);
const recoveredCode=await fs.readFile(recoveredEntryPath,'utf8');
const legacyCanonicalCode=recoveredCode.replaceAll('https://xcr-courtier.fr','https://xcr.fr');
const errorPageCanonical='canonicalUrl:"https://xcr.fr/404"';
if(legacyCanonicalCode.split(errorPageCanonical).length!==2)throw Error('Expected exactly one recovered error page SEO configuration');
const melunAddress='streetAddress:"2 Avenue Gallieni, Le CATG",addressLocality:"Melun",postalCode:"77000"';
const obsoleteAddress='streetAddress:"26 Rue Pages",addressLocality:"Suresnes",postalCode:"92150"';
if(!legacyCanonicalCode.includes(obsoleteAddress))throw Error('Expected recovered XCR address not found');
const canonicalCode=legacyCanonicalCode
 .replace(errorPageCanonical,errorPageCanonical+',noindex:!0')
 .replaceAll(obsoleteAddress,melunAddress)
 .replace(',Ct.jsx("meta",{name:"geo.region",content:"FR-92"}),Ct.jsx("meta",{name:"geo.placename",content:"Suresnes"}),Ct.jsx("meta",{name:"geo.position",content:"48.8698;2.2285"}),Ct.jsx("meta",{name:"ICBM",content:"48.8698, 2.2285"})','')
 .replace(/,aggregateRating:\{"@type":"AggregateRating",ratingValue:"[0-9.]+",reviewCount:"[0-9]+"(?:,bestRating:"5")?\}/g,'')
 .replaceAll(/,Ct\.jsxs\("div",\{className:"flex items-center gap-1\.5 ml-auto",children:\[\[\.\.\.Array\(5\)\]\.map\(\(e,s\)=>Ct\.jsx\(\$,\{className:"w-3\.5 h-3\.5 text-[a-z0-9-]+ fill-current"\},s\)\),Ct\.jsx\("span",\{className:"text-xs text-[a-z0-9/\-]+ ml-1",children:"4\.[89]\/5(?: Google)?"\}\)\]\}\)/g,'')
 .replace('Ct.jsxs("div",{className:"inline-flex items-center gap-1.5 mb-4 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full",children:[[...Array(5)].map((e,s)=>Ct.jsx($,{className:"w-3.5 h-3.5 text-amber-400 fill-current"},s)),Ct.jsx("span",{className:"ml-1 text-xs font-bold text-amber-700",children:"4.8/5 — 247 avis verifies"})]}),','')
 .replaceAll(/,"4\.[89]\/5 Google"/g,'')
 .replaceAll(/,Ct\.jsxs\(T\.div,\{variants:\w+,initial:"hidden",animate:"visible",custom:4,className:"flex items-center gap-1\.5 pt-6 border-t border-white\/10",children:\[\[\.\.\.Array\(5\)\]\.map\(\(e,s\)=>Ct\.jsx\(\$,\{className:"w-3\.5 h-3\.5 text-[a-z0-9-]+ fill-current"\},s\)\),Ct\.jsx\("span",\{className:"text-xs text-[a-z0-9/-]+ ml-1\.5",children:"4\.9\/5 -- 287 avis Google(?: -- 800\+ entreprises accompagnees)?"\}\)\]\}\)/g,'')
 .replaceAll(',{value:"4.9/5",label:"avis Google"}','')
 .replace(',"4.8/5 avis clients"','')
 .replace('Ct.jsxs("div",{className:"flex items-center gap-1 mb-2",children:[[...Array(5)].map((e,s)=>Ct.jsx($,{className:"w-4 h-4 text-amber-400 fill-current"},s)),Ct.jsx("span",{className:"text-sm font-bold text-slate-900 ml-2",children:"4.8/5"})]}),','')
 .replace('Note moyenne basee sur 247 avis clients - Courtier flotte depuis 2009','Courtier flotte depuis 2009')
 .replace(',{num:4,suffix:".8/5",label:"Note Google"}','')
 .replace('Ct.jsxs("div",{className:"text-4xl md:text-5xl font-black text-slate-900 mb-1.5 tabular-nums",children:[4===e.num?"4.8":Ct.jsx(Al,{target:e.num,suffix:e.suffix}),4===e.num&&Ct.jsx("span",{className:"text-orange-500",children:"/5"})]})','Ct.jsx("div",{className:"text-4xl md:text-5xl font-black text-slate-900 mb-1.5 tabular-nums",children:Ct.jsx(Al,{target:e.num,suffix:e.suffix})})');
if(/287 avis Google|247 avis clients|4\.8\/5 avis clients/.test(canonicalCode))throw Error('Recovered public rating text still present');
if(/4\.[89]\/5 Google|247 avis verifies/.test(canonicalCode))throw Error('Recovered unsupported rating badge still present');
if(canonicalCode===recoveredCode)throw Error('Legacy XCR origin not found in recovered entry');
const outdatedFleetCanonical='href:"https://xcr.fr/entreprises/assurance-flotte-auto-pme"';
if(canonicalCode.split(outdatedFleetCanonical).length!==2)throw Error('Expected a single fleet page canonical');
const fleetCanonicalCode=canonicalCode.replace(outdatedFleetCanonical,'href:"https://xcr.fr/entreprises/flotte-auto-pme"');
await fs.writeFile(recoveredEntryPath,rewriteProductClaims(rewriteProductMetadata(rewritePartnerLandingSeo(rewriteHomeClaims(rewriteHomeResponseTimes(rewritePublicReception(rewriteContactSeo(fleetCanonicalCode))))))));
const appRoutes=[...new Set([...recoveredCode.matchAll(/path:"(\/[^"]*)",element:/g)].map(match=>match[1]))].sort();
if(!['/','/contact','/dashboard/*','/blog/:postSlug','/entreprises/ville/:cityPageSlug'].every(route=>appRoutes.includes(route)))throw Error('Recovered router definitions not found');
await fs.writeFile(path.join(target,'app-routes.json'),JSON.stringify(appRoutes,null,2)+'\n');
const files=[];
async function walk(dir){for(const entry of await fs.readdir(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory())await walk(file);else files.push(file);}}
await walk(target);
for(const file of files){
 if(!/\.(js|html|json|xml|txt|css)$/.test(file))continue;
 let value=await fs.readFile(file,'utf8');
 value=value.replaceAll(oldOrigin,'https://xcr.fr/api/platform');
 value=value.replace(/eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g,'xcr-browser-public');
 if(file.endsWith('.js')) value=value.replaceAll('"https://xcr.fr/api/platform"','(location.origin+"/api/platform")');
 value=value.replaceAll('https://www.googletagmanager.com/gtag/js?id=G-TEST123456','/assets/analytics-disabled.js');
 value=value.replaceAll('test_verification','');
 value=value.replaceAll('Queue de génération traitée avec succès','Traitement du prochain contenu lancé');
 value=value.replaceAll('Article généré avec succès','Génération lancée. Le résultat sera signalé dès qu’il sera prêt.');
 value=value.replaceAll('Page ville générée avec succès','Génération lancée. Le résultat sera signalé dès qu’il sera prêt.');
 value=value.replaceAll('`${s.count} FAQ générées avec succès`','"Génération des FAQ lancée. Le résultat sera signalé dès qu’il sera prêt."');
 if(file.endsWith('index.html')){
  value=value.replace(/<script\b[^>]*\bsrc=["']https:\/\/bolt\.new\/[^"']*["'][^>]*>\s*<\/script>/gi,'');
  value=value.replace('href="/vite.svg"','href="/logos/logo_xcr_new.png"');
  value=value.replace('</head>','<style>html,body{max-width:100%;overflow-x:clip}</style>\n<script src="/assets/native-jobs.js" defer></script>\n</head>');
 }
 await fs.writeFile(file,value);
}
await fs.writeFile(path.join(target,'assets','analytics-disabled.js'),'/* No production analytics identifier configured. */\n');
await fs.writeFile(path.join(target,'assets','native-jobs.js'),`(()=>{const original=window.fetch.bind(window);window.fetch=async(...args)=>{const response=await original(...args);const url=String(args[0]?.url||args[0]);if(url.includes('/api/platform/functions/v1/')&&response.status===202){const job=await response.clone().json().catch(()=>null);if(job?.job_id){let attempts=0;const poll=async()=>{try{const status=await original('/api/platform/jobs/v1/'+encodeURIComponent(job.job_id),{cache:'no-store'});if(!status.ok)return;const result=await status.json();if(result.status==='completed'){alert('Traitement IA terminé. Actualisez la liste pour consulter le résultat. Les nouveaux contenus restent en brouillon.');return;}if(result.status==='failed'){alert('Le traitement IA a échoué : '+(result.error_message||'Réessayez.'));return;}if(++attempts<240)setTimeout(poll,5000);}catch{if(++attempts<240)setTimeout(poll,5000);}};setTimeout(poll,3000);}}return response;};})();\n`);
const builtEntry=await fs.readFile(recoveredEntryPath);
const entryDigest=createHash('sha256').update(builtEntry).digest('hex').slice(0,12);
const versionedEntry='index-seo-'+entryDigest+'.js';
const htmlPath=path.join(target,'index.html');
const builtHtml=await fs.readFile(htmlPath,'utf8');
if(!builtHtml.includes('/assets/'+recoveredEntry))throw Error('Recovered entry reference missing');
await fs.rename(recoveredEntryPath,path.join(target,'assets',versionedEntry));
await fs.writeFile(htmlPath,builtHtml.replaceAll('/assets/'+recoveredEntry,'/assets/'+versionedEntry));
await fs.writeFile(path.join(target,'sw.js'),`self.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',event=>event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.map(key=>caches.delete(key)))),self.clients.claim()])));\n`);
let commit=process.env.XCR_COMMIT||'';try{commit=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8',windowsHide:true}).trim()}catch{}
await fs.writeFile(path.join(target,'deploy-info.json'),JSON.stringify({site:'xcr.fr',commit,platform:'SERVEUR-XCR + Cloudflare proxy',built_at:new Date().toISOString()},null,2));
files.length=0;await walk(target);
const manifest=[];for(const file of files){const data=await fs.readFile(file);if(/\.(js|html|css)$/.test(file)&&/https?:\/\/[^\s"'<>]*(?:supabase\.co|netlify\.app)/i.test(data.toString()))throw Error('Unmigrated service URL in '+file);manifest.push({file:path.relative(target,file).replaceAll('\\','/'),bytes:data.length,sha256:createHash('sha256').update(data).digest('hex')});}
await fs.writeFile(path.join(target,'deployment-manifest.json'),JSON.stringify({site:'xcr.fr',hosting:'SERVEUR-XCR + Cloudflare proxy',built_at:new Date().toISOString(),files:manifest},null,2));
console.log(`Built ${manifest.length} recovered files for the native XCR platform.`);
