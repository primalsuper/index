
export async function getCache(env,key){
const item = await env.CACHE_KV.get(key);
return item ? JSON.parse(item) : null;
}

export async function setCache(env,key,data,ttl=3600){
await env.CACHE_KV.put(
key,
JSON.stringify(data),
{expirationTtl:ttl}
);
}
