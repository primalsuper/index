// lib/render/styles/kategori.js

export const kategoriStyles = () => {

return `

/* ===== KATEGORI PAGE ===== */

.kategori-page{
	max-width:1100px;
	margin:auto;
}

/* ===== HEADER KATEGORI ===== */

.kategori-header{
	margin-bottom:20px;
}

.kategori-title{
	font-size:28px;
	color:#fff;
	font-weight:800;
}

.kategori-desc{
	color:var(--muted);
	margin-top:6px;
	font-size:14px;
}

/* ===== GRID POST ===== */

.kategori-grid{
	display:grid;
	grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
	gap:18px;
	margin-top:20px;
}

/* ===== CARD ===== */

.kategori-card{
	background:var(--card);
	border:1px solid var(--border);
	border-radius:16px;
	overflow:hidden;
	transition:.2s;
}

.kategori-card:hover{
	transform:translateY(-4px);
	border-color:rgba(139,92,246,.4);
}

.kategori-card img{
	width:100%;
	height:160px;
	object-fit:cover;
}

.kategori-card-content{
	padding:14px;
}

.kategori-card-title{
	font-size:16px;
	margin-top:6px;
	color:#fff;
}

/* ===== PAGINATION ===== */

.pagination{
	display:flex;
	justify-content:center;
	gap:10px;
	margin-top:40px;
	flex-wrap:wrap;
}

.pagination a{
	padding:10px 14px;
	border-radius:10px;
	background:rgba(255,255,255,.04);
	border:1px solid var(--border);
	font-size:13px;
	color:var(--muted);
	transition:.2s;
}

.pagination a:hover{
	color:#fff;
	border-color:var(--primary);
}

.pagination .active{
	background:var(--primary);
	color:#fff;
}

`;
};
