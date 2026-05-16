// lib/renderAmp/styles/home.js

export const homeStyles = () => {

return `

/* ===== HOME AMP HERO ===== */

.hero{
	padding: 60px 20px;
	border-radius: 18px;
	background: linear-gradient(135deg,#4f46e5,#7c3aed);
	margin-bottom: 20px;
}

.hero h1{
	font-size: 30px;
	color: #fff;
	line-height: 1.2;
}

.hero p{
	margin-top: 10px;
	color: #e0e7ff;
	font-size: 14px;
}

.hero-buttons{
	margin-top: 16px;
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
}

/* ===== FEATURED AMP ===== */

.featured-grid{
	display: grid;
	grid-template-columns: 1fr;
	gap: 12px;
	margin-top: 20px;
}

.featured-card{
	background: var(--card);
	border: 1px solid var(--border);
	border-radius: 14px;
	overflow: hidden;
}

.featured-card img{
	width: 100%;
	height: 160px;
	object-fit: cover;
}

.featured-card-content{
	padding: 12px;
}

.card-category{
	font-size: 12px;
	color: var(--primary);
}

/* ===== TRENDING AMP ===== */

.trending-topics{
	margin-top: 30px;
}

.section-title{
	font-size: 16px;
	font-weight: 700;
	margin-bottom: 10px;
}

.trending-grid{
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.trending-item{
	padding: 8px 12px;
	border-radius: 999px;
	background: rgba(255,255,255,.05);
	border: 1px solid var(--border);
	font-size: 12px;
	color: var(--muted);
}

/* ===== LATEST AMP ===== */

.latest-posts{
	margin-top: 30px;
}

.post-grid{
	display: grid;
	grid-template-columns: 1fr;
	gap: 12px;
}

.post-card{
	background: var(--card);
	border: 1px solid var(--border);
	border-radius: 14px;
	overflow: hidden;
}

.post-card img{
	width: 100%;
	height: 160px;
	object-fit: cover;
}

.post-card-content{
	padding: 12px;
}

.post-card-content h3{
	font-size: 14px;
	margin-top: 6px;
}

/* ===== CTA AMP ===== */

.home-cta{
	margin-top: 40px;
	padding: 24px;
	border-radius: 16px;
	background: linear-gradient(135deg,#4f46e5,#7c3aed);
	text-align: center;
	color: #fff;
}

.home-cta p{
	margin-top: 8px;
	margin-bottom: 14px;
	color: #e0e7ff;
	font-size: 13px;
}

`;
};
