export function renderBody(props = {}) {
	const page = (props.page || "").toLowerCase();
	const content = props.content || "";

	return `
<main class="main">

	${page === "home" ? content : ""}

	${page === "post" ? `
		<article class="article">
			${content}
		</article>
	` : ""}

	${page === "kategori" ? `
		<section class="kategori-page">
			${content}
		</section>
	` : ""}

</main>
`;
}
