// lib/renderAmp/styles/kategori.js

export const kategoriStyles = () => {

return `

/* ===== KATEGORI AMP ===== */

.kategori-page{
	max-width: 1100px;
	margin: auto;
}

/* ===== HEADER ===== */

.kategori-header{
	margin-bottom: 16px;
}

.kategori-title{
	font-size: 22px;
	color: #fff;
	font-weight: 800;
}

.kategori-desc{
	color: var(--muted);
	margin-top: 6px;
	font-size: 13px;
}

/* ===== GRID ===== */

.kategori-grid{
	display: grid;
	grid-template-columns: 1fr;
	gap: 12px;
	margin-top: 16px;
}

/* ===== CARD ===== */

.kategori-card{
	background: var(--card);
	border: 1px solid var(--border);
	border-radius: 14px;
	overflow: hidden;
}

.kategori-card img{
	width: 100%;
	height: 160px;
	object-fit: cover;
}

.kategori-card-content{
	padding: 12px;
}

.kategori-card-title{
	font-size: 14px;
	color: #fff;
	margin-top: 6px;
}

/* ===== PAGINATION ===== */

.pagination{
	display: flex;
	justify-content: center;
	gap: 8px;
	margin-top: 30px;
	flex-wrap: wrap;
}

.pagination a{
	padding: 8px 12px;
	border-radius: 10px;
	background: rgba(255,255,255,.04);
	border: 1px solid var(--border);
	font-size: 12px;
	color: var(--muted);
}

.pagination a:hover{
	color: #fff;
	border-color: var(--primary);
}

.pagination .active{
	background: var(--primary);
	color: #fff;
}

`;
};
