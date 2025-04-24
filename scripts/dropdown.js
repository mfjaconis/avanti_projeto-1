document.addEventListener("DOMContentLoaded", () => {
	const btnMenu = document.querySelector("#btn-menu-small");
	const smallMenu = document.querySelector("#small-menu");

	if (btnMenu && smallMenu) {
		btnMenu.addEventListener("click", () => {
			if (smallMenu.classList.contains("active")) {
				smallMenu.classList.remove("active");
				console.log("Classe 'active' removida!");
			} else {
				smallMenu.classList.add("active");
			}
		});
	}
});
