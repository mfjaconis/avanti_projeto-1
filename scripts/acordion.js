const headers = document.querySelectorAll(".footer-content-navigation h4");

for (const header of headers) {
	header.addEventListener("click", () => {
		const ul = header.nextElementSibling;
		ul.classList.toggle("open");
	});
}
