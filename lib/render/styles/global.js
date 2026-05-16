// lib/render/styles/global.js

export const globalStyles = () => {

return `

:root{
	--bg:#020617;
	--card:#0f172a;
	--text:#e5e7eb;
	--muted:#94a3b8;
	--primary:#8b5cf6;
	--border:#1e293b;
	--shadow:0 10px 30px rgba(0,0,0,.35);
}

*{
	box-sizing:border-box;
	margin:0;
	padding:0;
}

html{
	scroll-behavior:smooth;
}

body{
	font-family: Inter, Arial, sans-serif;
	background:
		radial-gradient(circle at top left, rgba(99,102,241,.15), transparent 30%),
		radial-gradient(circle at bottom right, rgba(139,92,246,.12), transparent 30%),
		var(--bg);
	color:var(--text);
	line-height:1.7;
	-webkit-font-smoothing:antialiased;
}

a{
	color:inherit;
	text-decoration:none;
}

img{
	max-width:100%;
	display:block;
	height:auto;
}

/* ===== UTIL ===== */

.container{
	max-width:1100px;
	margin:auto;
	padding:24px 20px;
}

.btn-primary{
	background:linear-gradient(135deg,#4f46e5,#7c3aed);
	color:#fff;
	padding:12px 18px;
	border-radius:12px;
	display:inline-block;
	font-weight:600;
}

.btn-secondary{
	border:1px solid var(--border);
	color:var(--text);
	padding:12px 18px;
	border-radius:12px;
	display:inline-block;
}

/* ===== HEADER ===== */

.header{
	position:sticky;
	top:0;
	z-index:999;
	background:rgba(2,6,23,.7);
	backdrop-filter:blur(16px);
	border-bottom:1px solid rgba(255,255,255,.05);
}

.header-container{
	max-width:1100px;
	margin:auto;
	padding:14px 20px;
	display:flex;
	justify-content:space-between;
	align-items:center;
}

.logo{
	display:flex;
	gap:8px;
	align-items:center;
	font-weight:800;
}

.logo-text{
	color:#fff;
}

.desktop-nav{
	display:flex;
	gap:18px;
}

.desktop-nav a{
	color:var(--muted);
	font-size:14px;
	transition:.2s;
}

.desktop-nav a:hover{
	color:#fff;
}

.menu-toggle{
	display:none;
	background:none;
	border:none;
	color:#fff;
	font-size:26px;
}

/* ===== MOBILE NAV ===== */

.mobile-nav{
	position:fixed;
	top:0;
	right:-100%;
	width:280px;
	height:100%;
	background:#020617;
	border-left:1px solid rgba(255,255,255,.05);
	padding:20px;
	transition:.3s;
	z-index:1001;
}

.mobile-nav.active{
	right:0;
}

.mobile-links{
	display:flex;
	flex-direction:column;
	gap:14px;
	margin-top:20px;
}

.mobile-overlay{
	position:fixed;
	inset:0;
	background:rgba(0,0,0,.4);
	opacity:0;
	visibility:hidden;
	transition:.2s;
	z-index:1000;
}

.mobile-overlay.active{
	opacity:1;
	visibility:visible;
}

/* ===== HERO ===== */

.hero{
	padding:70px 20px;
	border-radius:24px;
	background:linear-gradient(135deg,#4f46e5,#7c3aed);
	margin-bottom:30px;
	position:relative;
	overflow:hidden;
}

.hero h1{
	font-size:42px;
	color:#fff;
	margin-bottom:10px;
}

.hero p{
	color:#e0e7ff;
	max-width:600px;
}

/* ===== FOOTER ===== */

.footer{
	margin-top:60px;
	padding:50px 20px;
	border-top:1px solid rgba(255,255,255,.05);
	background:rgba(255,255,255,.02);
}

.footer-container{
	max-width:1100px;
	margin:auto;
	display:grid;
	grid-template-columns:2fr 1fr 1fr;
	gap:30px;
}

.footer h3,
.footer h4{
	color:#fff;
}

.footer p{
	color:var(--muted);
	font-size:14px;
}

.footer-menu a{
	display:block;
	color:var(--muted);
	margin-top:8px;
	font-size:14px;
}

.footer-menu a:hover{
	color:#fff;
}

.footer-bottom{
	text-align:center;
	margin-top:30px;
	color:var(--muted);
	font-size:13px;
}

/* ===== RESPONSIVE ===== */

@media(max-width:768px){

	.desktop-nav{
		display:none;
	}

	.menu-toggle{
		display:block;
	}

	.footer-container{
		grid-template-columns:1fr;
	}

	.hero h1{
		font-size:30px;
	}
}

`;
};
