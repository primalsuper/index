// lib/renderAmp/styles/post.js

export const postStyles = () => {

return `

/* ===== ARTICLE AMP ===== */

.article{
	max-width: 800px;
	margin: auto;
}

.article h1{
	font-size: 28px;
	line-height: 1.2;
	margin-bottom: 14px;
	color: #fff;
}

.article h2{
	font-size: 22px;
	margin-top: 28px;
	margin-bottom: 10px;
	color: #fff;
}

.article h3{
	font-size: 18px;
	margin-top: 22px;
	margin-bottom: 8px;
	color: #fff;
}

.article p{
	margin: 14px 0;
	font-size: 15px;
	line-height: 1.7;
	color: #dbe4ee;
}

.article ul{
	padding-left: 18px;
	margin: 14px 0;
}

.article li{
	margin: 6px 0;
	color: #dbe4ee;
}

.article a{
	color: var(--primary);
	text-decoration: underline;
}

/* ===== TOC AMP ===== */

.toc{
	background: var(--card);
	border: 1px solid var(--border);
	border-radius: 12px;
	padding: 12px;
	margin: 16px 0;
}

.toc-title{
	font-weight: 700;
	font-size: 14px;
	color: #fff;
}

.toc ul{
	margin-top: 10px;
	padding-left: 16px;
}

.toc li{
	margin: 6px 0;
	font-size: 13px;
	color: var(--muted);
}

.toc a{
	color: #fff;
	text-decoration: none;
}

`;
};
