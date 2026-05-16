// lib/renderAmp/body.js

export const renderBodyAmp = ({
	page = "",
	content = ""
} = {}) => {

	const currentPage = String(page)
		.trim()
		.toLowerCase();

	return `

<main class="main">

	${currentPage === "home"
		? content
		: ""}

	${currentPage === "post"
		? `
			<article class="article">
				${content}
			</article>
		`
		: ""}

	${currentPage === "kategori"
		? `
			<section class="kategori-page">
				${content}
			</section>
		`
		: ""}

</main>

`;

};
