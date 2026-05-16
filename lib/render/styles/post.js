// lib/render/styles/post.js

export const postStyles = () => {

return `

/* ===== ARTICLE ===== */

.article{
	max-width:800px;
	margin:auto;
}

.article img{
	border-radius:16px;
	margin:20px 0;
	box-shadow:var(--shadow);
}

.article h1{
	font-size:38px;
	line-height:1.2;
	margin-bottom:18px;
	color:#fff;
}

.article h2{
	font-size:28px;
	margin-top:40px;
	margin-bottom:12px;
	color:#fff;
}

.article h3{
	font-size:22px;
	margin-top:30px;
	margin-bottom:10px;
	color:#fff;
}

.article p{
	margin:16px 0;
	color:#dbe4ee;
	font-size:16px;
	line-height:1.8;
}

.article ul{
	padding-left:20px;
	margin:16px 0;
}

.article li{
	margin:8px 0;
	color:#dbe4ee;
}

.article a{
	color:var(--primary);
	text-decoration:underline;
}

/* ===== BREADCRUMB ===== */

.breadcrumb{
	font-size:13px;
	color:var(--muted);
	margin-bottom:16px;
}

/* ===== TOC ===== */

.toc{
	background:var(--card);
	border:1px solid var(--border);
	border-radius:14px;
	padding:14px;
	margin:20px 0;
}

.toc-title{
	font-weight:700;
	font-size:14px;
	color:#fff;
	cursor:pointer;
}

.toc ul{
	margin-top:10px;
	padding-left:18px;
}

.toc li{
	margin:6px 0;
	color:var(--muted);
	font-size:14px;
}

.toc a{
	color:var(--text);
	text-decoration:none;
}

.toc a:hover{
	color:var(--primary);
}

`;
};
