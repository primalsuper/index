// lib/renderAmp/styles.js

import { globalStyles } from "./styles/global";
import { homeStyles } from "./styles/home";
import { postStyles } from "./styles/post";
import { kategoriStyles } from "./styles/kategori";

export const getStylesAmp = (page = "") => {

	const currentPage = String(page)
		.trim()
		.toLowerCase();

	// AMP must be strict: no animations, no heavy effects, minimal CSS
	return `

${globalStyles()}

${currentPage === "home"
	? homeStyles()
	: ""}

${currentPage === "post"
	? postStyles()
	: ""}

${currentPage === "kategori"
	? kategoriStyles()
	: ""}

/* ===== AMP SAFE OVERRIDES ===== */

* {
	animation: none !important;
	transition: none !important;
}

button, a {
	touch-action: manipulation;
}

img {
	max-width: 100%;
	height: auto;
}

`;
};
