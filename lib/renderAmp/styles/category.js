export default function categoryStyle(){
return `
.grid{
display:grid;
grid-template-columns:
repeat(
auto-fit,
minmax(280px,1fr)
);
gap:24px;
}

.card{
overflow:hidden;
border-radius:24px;
background:
linear-gradient(
180deg,
rgba(255,255,255,.03),
rgba(255,255,255,.01)
);
border:1px solid rgba(255,255,255,.05);
box-shadow:var(--shadow);
}

.card img{
width:100%;
aspect-ratio:1200/630;
object-fit:cover;
}

.card h3{
padding:18px;
font-size:20px;
line-height:1.4;
font-weight:700;
color:#fff;
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

/* MOBILE */

@media(max-width:768px){

.grid{
grid-template-columns:1fr;
}

}
`
}
