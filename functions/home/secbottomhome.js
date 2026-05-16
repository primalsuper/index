export const renderTopHome = ({
	featured = [],
	trending = []
} = {}) => {

	return `

<section class="hero">
	<div class="hero-content">

		<span class="hero-badge">
			AI Modern Platform
		</span>

		<h1>
			Modern AI & Digital Platform
		</h1>

		<p>
			Informasi AI modern, teknologi digital,
			tren internet, tools online,
			dan tutorial terbaru.
		</p>

		<div class="hero-buttons">

			<a href="#latest" class="btn-primary">
				Explore Sekarang
			</a>

			<a href="/kategori/ai" class="btn-secondary">
				Kategori AI
			</a>

		</div>

	</div>
</section>

<section class="featured-grid">

${featured.map(post => `
<a class="featured-card" href="/${post.slug}">

	<img
		src="${post.image}"
		alt="${post.title}"
		loading="lazy">

	<div class="featured-card-content">

		<span class="card-category">
			${post.category}
		</span>

		<h3>
			${post.title}
		</h3>

	</div>

</a>
`).join("")}

</section>

<section class="trending-topics">

	<div class="section-title">
		Trending Topics
	</div>

	<div class="trending-grid">

	${trending.map(item => `
	<a
		class="trending-item"
		href="/${item.slug}">

		${item.title}

	</a>
	`).join("")}

	</div>

</section>

`;

};
