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
 if(file.endsWith('index.html')){
  value=value.replace(/<script\b[^>]*\bsrc=["']https:\/\/bolt\.new\/[^"']*["'][^>]*>\s*<\/script>/gi,'');
  value=value.replace('href="/vite.svg"','href="/logos/logo_xcr_new.png"');
  value=value.replace('</head>','<style>html,body{max-width:100%;overflow-x:clip}</style>\n</head>');
 }
 await fs.writeFile(file,value);
}
await fs.writeFile(path.join(target,'assets','analytics-disabled.js'),'/* No production analytics identifier configured. */\n');
await fs.writeFile(path.join(target,'sw.js'),`self.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',event=>event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.map(key=>caches.delete(key)))),self.clients.claim()])));\n`);
let commit=process.env.XCR_COMMIT||'';try{commit=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8',windowsHide:true}).trim()}catch{}
await fs.writeFile(path.join(target,'deploy-info.json'),JSON.stringify({site:'xcr.fr',commit,platform:'SERVEUR-XCR + Cloudflare proxy',built_at:new Date().toISOString()},null,2));
files.length=0;await walk(target);
const manifest=[];for(const file of files){const data=await fs.readFile(file);if(/\.(js|html|css)$/.test(file)&&/https?:\/\/[^\s"'<>]*(?:supabase\.co|netlify\.app)/i.test(data.toString()))throw Error('Unmigrated service URL in '+file);manifest.push({file:path.relative(target,file).replaceAll('\\','/'),bytes:data.length,sha256:createHash('sha256').update(data).digest('hex')});}
await fs.writeFile(path.join(target,'deployment-manifest.json'),JSON.stringify({site:'xcr.fr',hosting:'SERVEUR-XCR + Cloudflare proxy',built_at:new Date().toISOString(),files:manifest},null,2));
console.log(`Built ${manifest.length} recovered files for the native XCR platform.`);
