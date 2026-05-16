// lib/render/popup.js

export const renderPopup = ({
	title = "Subscribe",
	description = "Dapatkan update artikel terbaru langsung ke email kamu.",
	buttonText = "Subscribe",
	actionUrl = "/subscribe"
} = {}) => {

	return `

<div class="popup-overlay" id="popupOverlay"></div>

<div class="popup" id="popup">

	<div class="popup-header">

		<h3>
			${title}
		</h3>

		<button
			class="popup-close"
			id="popupClose"
			aria-label="Close Popup">
			✕
		</button>

	</div>

	<div class="popup-body">

		<p>
			${description}
		</p>

		<form
			class="popup-form"
			action="${actionUrl}"
			method="POST">

			<input
				type="email"
				name="email"
				placeholder="Enter your email"
				required>

			<button type="submit">
				${buttonText}
			</button>

		</form>

	</div>

</div>

<script>
(function () {
	const popup = document.getElementById("popup");
	const overlay = document.getElementById("popupOverlay");
	const closeBtn = document.getElementById("popupClose");

	if (!popup || !overlay || !closeBtn) return;

	function closePopup() {
		popup.classList.remove("active");
		overlay.classList.remove("active");
	}

	function openPopup() {
		popup.classList.add("active");
		overlay.classList.add("active");
	}

	closeBtn.addEventListener("click", closePopup);
	overlay.addEventListener("click", closePopup);

	// auto open after delay
	setTimeout(() => {
		openPopup();
	}, 5000);
})();
</script>

`;

};
