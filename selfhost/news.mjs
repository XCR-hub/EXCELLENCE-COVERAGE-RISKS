import dns from 'node:dns/promises';
import {XMLParser} from 'fast-xml-parser';
import {randomUUID} from 'node:crypto';
import {asUser,nativeError} from './native-context.mjs';
export async function publicFeedUrl(input){const url=new URL(input);if(url.protocol!=='https:'||url.username||url.password||url.port&&url.port!=='443')throw nativeError(400,'Flux HTTPS public requis');const ips=await dns.lookup(url.hostname,{all:true});if(!ips.length||ips.some(({address:a})=>a.includes(':')||/^(0\.|10\.|127\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.|224\.|255\.)/.test(a)))throw nativeError(400,'Adresse de flux non autorisée');return url;}
export function createNews({pool}){
 let busy=false;
 async function scrape(user){if(busy)throw nativeError(409,'Une collecte est déjà en cours');busy=true;let count=0;const errors=[];
  try{const feeds=await asUser(pool,user,async db=>(await db.query("select id,name,url from public.seo_news_sources where active and type='rss' order by last_scraped_at nulls first limit 3")).rows);if(!feeds.length)throw nativeError(409,'Ajoutez un flux RSS dans les sources d’actualités');
   for(const feed of feeds)try{
    const url=await publicFeedUrl(feed.url);const response=await fetch(url,{redirect:'error',signal:AbortSignal.timeout(10000)});if(!response.ok)throw Error('Flux indisponible');let size=0;const chunks=[];for await(const chunk of response.body){size+=chunk.length;if(size>1024*1024)throw Error('Flux trop volumineux');chunks.push(chunk);}const xml=Buffer.concat(chunks).toString();if(/<!DOCTYPE|<!ENTITY/i.test(xml))throw Error('XML non autorisé');const parsed=new XMLParser({ignoreAttributes:false,processEntities:false}).parse(xml);const entries=parsed.rss?.channel?.item||parsed.feed?.entry||[];
    for(const entry of (Array.isArray(entries)?entries:[entries]).slice(0,10)){const title=String(entry.title?.['#text']||entry.title||'').slice(0,250);const link=typeof entry.link==='string'?entry.link:entry.link?.['@_href'];if(!title||!link)continue;const source=new URL(link);if(source.protocol!=='https:')continue;const exists=await asUser(pool,user,async db=>(await db.query('select id from public.seo_news where source_url=$1 limit 1',[source.href])).rowCount);if(exists)continue;
     // Store only the headline and source link, ready for editorial review.
     await asUser(pool,user,db=>db.query("insert into public.seo_news(title,slug,source_url,source_name,status,scraping_source) values($1,$2,$3,$4,'draft',$5)",[title,'veille-'+randomUUID(),source.href,feed.name,feed.url]));count++;
    }await asUser(pool,user,db=>db.query('update public.seo_news_sources set last_scraped_at=now() where id=$1',[feed.id]));
   }catch{errors.push({source_id:feed.id,error:'Flux inaccessible ou invalide'});}
   return {success:errors.length===0,count,draft:true,errors};
  }finally{busy=false;}
 }
 return {scrape};
}
