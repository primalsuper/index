// lib/render/footer.js

import { SITE } from "../config";

export const renderFooter = () => {

	return `

<footer class="footer">

	<div class="footer-container">

		<div class="footer-brand">

			<h3>
				⚡ ${SITE.name}
			</h3>

			<p>
				Platform informasi AI modern,
				teknologi digital, tools online,
				dan tren internet terbaru.
			</p>

		</div>

		<div class="footer-menu">

			<h4>Menu</h4>

			<a href="/">Home</a>
			<a href="/kategori/ai">AI</a>
			<a href="/kategori/teknologi">Teknologi</a>
			<a href="/kategori/tutorial">Tutorial</a>

		</div>

		<div class="footer-menu">

			<h4>Info</h4>

			<a href="/rss.xml">RSS</a>
			<a href="/sitemap.xml">Sitemap</a>
			<a href="/privacy-policy">Privacy Policy</a>
			<a href="/contact">Contact</a>

		</div>

	</div>

	<div class="footer-bottom">

		© ${new Date().getFullYear()} ${SITE.name}.
		All rights reserved.

	</div>

</footer>

`;

};
