const searchInput = document.getElementById("menu-search-input");
const searchButton = document.getElementById("search-btn");
const searchResult = document.getElementById("search-result");

searchButton.addEventListener("click", () => {
	const searchText = searchInput.value.trim();

	if (searchText) {
		searchResult.textContent = `Você buscou por: '${searchText}'`;
		searchResult.style.display = "block";
	} else {
		searchResult.style.display = "none";
	}
});
