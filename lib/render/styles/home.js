
// lib/render/styles/home.js

export const homeStyles = () => {

return `

/* ===== HOME HERO ===== */

.hero-content{
	text-align:left;
	max-width:700px;
	margin:auto;
}

.hero-badge{
	display:inline-block;
	padding:6px 12px;
	border-radius:999px;
	background:rgba(255,255,255,.12);
	color:#fff;
	font-size:12px;
	margin-bottom:14px;
}

.hero-buttons{
	display:flex;
	gap:12px;
	margin-top:18px;
	flex-wrap:wrap;
}

/* ===== FEATURED ===== */

.featured-grid{
	display:grid;
	grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
	gap:18px;
	margin-top:30px;
}

.featured-card{
	background:var(--card);
	border:1px solid var(--border);
	border-radius:16px;
	overflow:hidden;
	transition:.2s;
}

.featured-card:hover{
	transform:translateY(-4px);
	border-color:rgba(139,92,246,.4);
}

.featured-card img{
	width:100%;
	height:160px;
	object-fit:cover;
}

.featured-card-content{
	padding:14px;
}

.card-category{
	font-size:12px;
	color:var(--primary);
	display:inline-block;
	margin-bottom:6px;
}

/* ===== TRENDING ===== */

.trending-topics{
	margin-top:40px;
}

.section-title{
	font-size:18px;
	font-weight:700;
	margin-bottom:14px;
	color:#fff;
}

.trending-grid{
	display:flex;
	flex-wrap:wrap;
	gap:10px;
}

.trending-item{
	padding:10px 14px;
	border-radius:999px;
	background:rgba(255,255,255,.05);
	border:1px solid var(--border);
	font-size:13px;
	color:var(--muted);
	transition:.2s;
}

.trending-item:hover{
	color:#fff;
	border-color:var(--primary);
}

/* ===== LATEST ===== */

.latest-posts{
	margin-top:50px;
}

.post-grid{
	display:grid;
	grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
	gap:18px;
}

.post-card{
	background:var(--card);
	border:1px solid var(--border);
	border-radius:16px;
	overflow:hidden;
	transition:.2s;
}

.post-card:hover{
	transform:translateY(-4px);
}

.post-card img{
	width:100%;
	height:180px;
	object-fit:cover;
}

.post-card-content{
	padding:14px;
}

.post-card-content h3{
	font-size:16px;
	margin-top:6px;
}

/* ===== CTA ===== */

.home-cta{
	margin-top:60px;
	padding:40px;
	border-radius:20px;
	background:linear-gradient(135deg,#4f46e5,#7c3aed);
	text-align:center;
	color:#fff;
}

.home-cta p{
	margin-top:10px;
	margin-bottom:20px;
	color:#e0e7ff;
}

`;
};
