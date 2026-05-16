// lib/render/scripts.js

export const renderScripts = () => {

	return `

<script>
// ===== MOBILE MENU =====
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const closeMenu = document.getElementById("closeMenu");
const mobileOverlay = document.getElementById("mobileOverlay");

function openMenu() {
	mobileNav?.classList.add("active");
	mobileOverlay?.classList.add("active");
	document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
	mobileNav?.classList.remove("active");
	mobileOverlay?.classList.remove("active");
	document.body.style.overflow = "";
}

menuToggle?.addEventListener("click", openMenu);
closeMenu?.addEventListener("click", closeMobileMenu);
mobileOverlay?.addEventListener("click", closeMobileMenu);

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		closeMobileMenu();
	}
});
</script>

`;

};
