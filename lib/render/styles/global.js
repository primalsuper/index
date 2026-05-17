export default function globalStyle(){
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
font-family:
Inter,
Arial,
sans-serif;
background:
radial-gradient(
circle at top left,
rgba(99,102,241,.15),
transparent 30%
),
radial-gradient(
circle at bottom right,
rgba(139,92,246,.12),
transparent 30%
),
var(--bg);
color:var(--text);
line-height:1.8;
-webkit-font-smoothing:antialiased;
}

a{
text-decoration:none;
color:inherit;
}

img{
max-width:100%;
display:block;
height:auto;
}

.container{
max-width:980px;
margin:auto;
padding:26px 20px;
}

/* MOBILE */

@media(max-width:768px){

.container{
padding:18px;
}

}
`
}
