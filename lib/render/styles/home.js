export default function homeStyle(){
return `
export default function homeStyle(){
return `
/* HERO */

.hero{
position:relative;
overflow:hidden;
padding:70px 30px;
border-radius:28px;
margin-bottom:34px;
background:
linear-gradient(
135deg,
#4f46e5,
#7c3aed
);
box-shadow:
0 20px 60px rgba(99,102,241,.35);
}

.hero::before{
content:"";
position:absolute;
width:320px;
height:320px;
background:rgba(255,255,255,.08);
border-radius:50%;
top:-100px;
right:-80px;
filter:blur(10px);
}

.hero h1{
position:relative;
z-index:2;
font-size:48px;
line-height:1.1;
margin-bottom:14px;
color:#fff;
letter-spacing:-1px;
}

.hero p{
position:relative;
z-index:2;
font-size:18px;
max-width:720px;
color:#e0e7ff;
}

/* SEO BOX */

.seo-box{
padding:24px;
border-radius:24px;
background:
linear-gradient(
180deg,
rgba(255,255,255,.03),
rgba(255,255,255,.01)
);
border:1px solid rgba(255,255,255,.06);
backdrop-filter:blur(14px);
margin-bottom:30px;
box-shadow:var(--shadow);
}

/* GRID */

.grid{
display:grid;
grid-template-columns:
repeat(
auto-fit,
minmax(280px,1fr)
);
gap:24px;
}

/* CARD */

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
transition:
transform .28s ease,
border-color .28s ease,
box-shadow .28s ease;
box-shadow:var(--shadow);
}

.card:hover{
transform:translateY(-6px);
border-color:
rgba(139,92,246,.45);
}

.card img{
width:100%;
aspect-ratio:1200/630;
object-fit:cover;
}

.card h3,
.card h4{
padding:18px;
font-size:20px;
line-height:1.4;
font-weight:700;
color:#fff;
}

/* MOBILE */

@media(max-width:768px){

.hero{
padding:48px 24px;
border-radius:24px;
}

.hero h1{
font-size:34px;
}

.hero p{
font-size:16px;
}

.grid{
grid-template-columns:1fr;
}

}
`
}
`
}
