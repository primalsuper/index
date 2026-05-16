// lib/renderAmp.js

import { seo } from "./seo";

// ⚠️ FIX: pastikan pakai .js agar Cloudflare resolve dengan benar
import { getStylesAmp } from "./renderAmp/styles.js";
import { renderHeaderAmp } from "./renderAmp/header.js";
import { renderBodyAmp } from "./renderAmp/body.js";
import { renderFooterAmp } from "./renderAmp/footer.js";

export const layoutAmp = (props = {}) => {

	const page = (props.page || "").trim().toLowerCase();

	const html = `<!DOCTYPE html>
<html ⚡ lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

${seo(props)}

<style amp-custom>
${getStylesAmp(page)}
</style>

<script async src="https://cdn.ampproject.org/v0.js"></script>
</head>

<body>

${renderHeaderAmp(props)}

${renderBodyAmp(props)}

${renderFooterAmp(props)}

</body>
</html>`;

	return new Response(html, {
		headers: {
			"content-type": "text/html;charset=UTF-8",
			"cache-control": "public,max-age=300"
		}
	});
};
