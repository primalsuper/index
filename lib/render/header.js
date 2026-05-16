// lib/render/header.js

import { SITE } from "../config";

export const renderHeader = ({
	page = "",
	title = ""
} = {}) => {

	const currentPage = String(page)
		.trim()
		.toLowerCase();

	return `

<header class="header">

	<div class="header-container">

		<a href="/" class="logo">

			<span class="logo-icon">
				⚡
			</span>

			<span class="logo-text">
				${SITE.name}
			</span>

		</a>

		<nav class="desktop-nav">

			<a
				href="/"
				class="${currentPage === "home" ? "active" : ""}">
				Home
			</a>

			<a
				href="/kategori/ai"
				class="${currentPage === "kategori" ? "active" : ""}">
				AI
			</a>

			<a href="/kategori/teknologi">
				Teknologi
			</a>

			<a href="/kategori/tutorial">
				Tutorial
			</a>

			<a href="/rss.xml">
				RSS
			</a>

		</nav>

		<button
			class="menu-toggle"
			id="menuToggle"
			aria-label="Open Menu">

			☰

		</button>

	</div>

</header>

<nav
	class="mobile-nav"
	id="mobileNav">

	<div class="mobile-nav-top">

		<div class="mobile-logo">

			⚡ ${SITE.name}

		</div>

		<button
			class="close-menu"
			id="closeMenu"
			aria-label="Close Menu">

			✕

		</button>

	</div>

	<div class="mobile-links">

		<a href="/">
			Home
		</a>

		<a href="/kategori/ai">
			AI
		</a>

		<a href="/kategori/teknologi">
			Teknologi
		</a>

		<a href="/kategori/tutorial">
			Tutorial
		</a>

		<a href="/rss.xml">
			RSS Feed
		</a>

		<a href="/sitemap.xml">
			Sitemap
		</a>

	</div>

</nav>

<div
	class="mobile-overlay"
	id="mobileOverlay">
</div>

`;

};
