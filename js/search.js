async function searchPagesSetup() {
	const searchInput = document.querySelector("#search-input");
	const searchResults = document.querySelector("#search-results");

	const response = await fetch("/pages/search-index.json");
	const pages = await response.json();

	function searchPages(query) {
		searchResults.innerHTML = "";

		if (query.trim() === "") {
			return;
		}

		const matchingPages = pages.filter(page => {
			return page.title.toLowerCase().includes(query.toLowerCase());
		});

		if (matchingPages.length === 0) {
			searchResults.textContent = "No pages found.";
			return;
		}
	
		matchingPages.forEach(page => {
			const link = document.createElement("a");

			link.href = "/" + page.path;
			link.textContent = page.title;
		
			searchResults.appendChild(link);
		});
	}

	searchInput.addEventListener("input", () => {
		searchPages(searchInput.value);
	});
}

searchPagesSetup();
