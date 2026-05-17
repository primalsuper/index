export default function postStyle(){
return `
/* POST */

.post img{
border-radius:24px;
margin-bottom:26px;
box-shadow:var(--shadow);
}

.post h1{
font-size:42px;
line-height:1.2;
margin-bottom:20px;
letter-spacing:-1px;
}

.post-content{
font-size:18px;
color:#dbe4ee;
}

.post-content p{
margin:20px 0;
}

.post-content h2{
font-size:32px;
margin-top:50px;
margin-bottom:18px;
line-height:1.3;
}

.post-content h3{
font-size:24px;
margin-top:36px;
margin-bottom:12px;
}

.post-content ul{
padding-left:24px;
margin:20px 0;
}

.post-content li{
margin:10px 0;
}

.post-content a{
color:#8b5cf6;
text-decoration:underline;
}

.breadcrumb{
font-size:14px;
margin-bottom:22px;
color:var(--muted);
}

.pagination{
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:10px;
margin:50px 0;
}

.pagination a{
padding:12px 16px;
border-radius:14px;
background:
rgba(255,255,255,.03);
border:
1px solid rgba(255,255,255,.05);
font-size:14px;
}

.pagination .active{
background:#8b5cf6;
color:#fff;
}

.search{
width:100%;
padding:14px;
border-radius:14px;
border:1px solid var(--border);
background:#111827;
color:#fff;
margin-bottom:16px;
outline:none;
}

#results{
display:grid;
gap:10px;
margin-bottom:20px;
}

.search-item{
padding:14px;
border-radius:12px;
background:var(--card);
border:1px solid var(--border);
}

.badge{
display:inline-block;
padding:6px 12px;
border-radius:999px;
background:#312e81;
color:#c7d2fe;
font-size:12px;
margin-bottom:12px;
}

/* TOC */

.toc{
background:var(--card);
border:1px solid var(--border);
border-radius:18px;
padding:16px 20px;
margin:28px 0;
box-shadow:var(--shadow)
}

.toc-title{
cursor:pointer;
font-weight:700;
font-size:16px;
color:var(--text);
list-style:none;
outline:none;
display:flex;
align-items:center;
justify-content:space-between;
gap:10px
}

.toc-title::-webkit-details-marker{
display:none
}

.toc ul{
margin:16px 0 0;
padding-left:18px
}

.toc li{
margin:10px 0;
color:var(--muted)
}

.toc a{
color:var(--text);
text-decoration:none;
transition:.2s
}

.toc a:hover{
color:var(--primary);
padding-left:2px
}

.toc-toggle{
font-size:0
}

.toc-toggle::before{
content:"Buka";
font-size:13px;
color:var(--muted)
}

.toc[open] .toc-toggle::before{
content:"Tutup";
color:var(--primary)
}

/* MOBILE */

@media(max-width:768px){

.post h1{
font-size:32px;
}

.post-content{
font-size:17px;
}

}
`
}
