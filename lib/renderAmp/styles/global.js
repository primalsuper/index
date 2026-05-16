// lib/renderAmp/styles/global.js

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
	background: var(--bg);
	color: var(--text);
	line-height: 1.7;
	-webkit-font-smoothing: antialiased;
}

a{
	color: inherit;
	text-decoration: none;
}

img{
	max-width: 100%;
	height: auto;
	display: block;
}

/* ===== AMP SAFE RESET ===== */

button{
	display: inline-block;
	border: none;
	background: none;
	color: inherit;
}

/* ===== UTIL ===== */

.container{
	max-width: 1100px;
	margin: auto;
	padding: 20px;
}

.btn-primary{
	background: var(--primary);
	color: #fff;
	padding: 12px 16px;
	border-radius: 10px;
	display: inline-block;
	font-weight: 600;
}

.btn-secondary{
	border: 1px solid var(--border);
	color: var(--text);
	padding: 12px 16px;
	border-radius: 10px;
	display: inline-block;
}

/* ===== HEADER (AMP MINIMAL) ===== */

.header{
	position: sticky;
	top: 0;
	z-index: 999;
	background: rgba(2,6,23,.9);
	border-bottom: 1px solid rgba(255,255,255,.05);
}

.header-container{
	max-width: 1100px;
	margin: auto;
	padding: 14px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo{
	font-weight: 800;
	color: #fff;
}

/* ===== FOOTER ===== */

.footer{
	margin-top: 50px;
	padding: 40px 20px;
	border-top: 1px solid rgba(255,255,255,.05);
	background: rgba(255,255,255,.02);
}

.footer-container{
	max-width: 1100px;
	margin: auto;
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;
}

.footer h3,
.footer h4{
	color: #fff;
}

.footer p{
	color: var(--muted);
	font-size: 14px;
}

.footer-menu a{
	display: block;
	margin-top: 8px;
	color: var(--muted);
	font-size: 14px;
}

.footer-menu a:hover{
	color: #fff;
}

.footer-bottom{
	text-align: center;
	margin-top: 20px;
	color: var(--muted);
	font-size: 13px;
}

`;
};
