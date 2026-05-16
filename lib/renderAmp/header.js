// lib/renderAmp/header.js

import { SITE } from "../config";

export const renderHeaderAmp = ({
	page = ""
} = {}) => {

	const currentPage = String(page)
		.trim()
		.toLowerCase();

	return `

<header class="header">

	<div class="header-container">

		<a href="/" class="logo">
			⚡ ${SITE.name}
		</a>

		<nav class="desktop-nav">

			<a href="/" class="${currentPage === "home" ? "active" : ""}">
				Home
			</a>

			<a href="/kategori/ai">
				AI
			</a>

			<a href="/kategori/teknologi">
				Teknologi
			</a>

			<a href="/rss.xml">
				RSS
			</a>

		</nav>

	</div>

</header>

<nav class="mobile-nav">

	<div class="mobile-links">

		<a href="/">Home</a>
		<a href="/kategori/ai">AI</a>
		<a href="/kategori/teknologi">Teknologi</a>
		<a href="/kategori/tutorial">Tutorial</a>

	</div>

</nav>

`;

};
