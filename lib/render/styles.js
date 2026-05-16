// lib/render/styles.js

import { globalStyles } from "./styles/global";

import { homeStyles } from "./styles/home";
import { postStyles } from "./styles/post";
import { kategoriStyles } from "./styles/kategori";

export const getStyles = (page = "") => {

	const currentPage = String(page)
		.trim()
		.toLowerCase();

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

`;

};
