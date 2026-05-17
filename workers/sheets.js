
import {getCache,setCache} from './cache.js';

export async function getPosts(env){
const key = 'sheet:posts';

const cached = await getCache(env,key);

if(cached){
return cached;
}

const endpoint =
`https://sheets.googleapis.com/v4/spreadsheets/${env.GOOGLE_SHEETS_ID}/values/posts?key=${env.GOOGLE_API_KEY}`;

const response = await fetch(endpoint);

const json = await response.json();

const [headers,...rows] = json.values;

const posts = rows.map(row=>{
const item = {};

headers.forEach((header,index)=>{
item[header] = row[index] || '';
});

return item;
});

await setCache(env,key,posts,3600);

return posts;
}
