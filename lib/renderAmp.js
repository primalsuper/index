import { SITE } from "./config";
import renderAmpStyles from "./renderAmp/styles.js";
import header from "./renderAmp/header.js";
import footer from "./renderAmp/footer.js";

export function renderAmp({ title="Auto Blog AMP", description="Artikel AMP cepat", type='home', canonical="", content="", image="" }){
	const url=canonical||SITE.domain;
	const og=image||`${SITE.domain}/og/default`;

	return new Response(`<!doctype html>
<html amp lang="id">
<head>
<meta charset="utf-8">
<title>${escapeHTML(title)}</title>
<link rel="canonical" href="${url}">
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
<meta name="description" content="${escapeHTML(description)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="theme-color" content="#020617">
<meta property="og:type" content="article">
<meta property="og:title" content="${escapeHTML(title)}">
<meta property="og:description" content="${escapeHTML(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHTML(title)}">
<meta name="twitter:description" content="${escapeHTML(description)}">
<meta name="twitter:image" content="${og}">
<script async src="https://cdn.ampproject.org/v0.js"></script>
<script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
<style amp-boilerplate>
body{
-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
animation:-amp-start 8s steps(1,end) 0s 1 normal both
}
@-webkit-keyframes -amp-start{
from{visibility:hidden}
to{visibility:visible}
}
@-moz-keyframes -amp-start{
from{visibility:hidden}
to{visibility:visible}
}
@-ms-keyframes -amp-start{
from{visibility:hidden}
to{visibility:visible}
}
@-o-keyframes -amp-start{
from{visibility:hidden}
to{visibility:visible}
}
@keyframes -amp-start{
from{visibility:hidden}
to{visibility:visible}
}
</style>
<noscript>
<style amp-boilerplate>
body{
-webkit-animation:none;
-moz-animation:none;
-ms-animation:none;
animation:none
}
</style>
</noscript>
<style amp-custom>
${renderAmpStyles(type)}
</style>
</head>
<body>


${header(SITE.name)}

<main class="container">
${content}
</main>

${footer(SITE.name)}



</body>

</html>`,{
		headers:{
			"content-type":"text/html;charset=UTF-8",
			"cache-control":"public,max-age=300"
		}
	});
}

function escapeHTML(str=""){
	return String(str).replace(/[&<>"]/g,c=>({
		"&":"&amp;",
		"<":"&lt;",
		">":"&gt;",
		'"':"&quot;"
	}[c]));
}
