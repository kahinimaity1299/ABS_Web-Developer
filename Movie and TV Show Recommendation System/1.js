const recommendations = [
    { title: "Breaking Bad", type: "TV Show" },
    { title: "The Dark Knight", type: "Movie" },
    { title: "Friends", type: "TV Show" },
    { title: "Inception", type: "Movie" },
    { title: "Game of Thrones", type: "TV Show" },
    { title: "The Matrix", type: "Movie" },
    { title: "Stranger Things", type: "TV Show" },
    { title: "The Godfather", type: "Movie" },
    
    
];

document.getElementById("searchButton").addEventListener("click", function () {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = ""; // Clear previous results

    if (searchTerm.trim() === "") {
        resultsDiv.innerHTML = "<p class='no-results'>Please enter a search term.</p>";
        return;
    }

    const filteredResults = recommendations.filter(item =>
        item.title.toLowerCase().includes(searchTerm)
    );

    if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
            const resultItem = document.createElement("div");
            resultItem.className = "result-item";
            resultItem.textContent = ${item.title} (${item.type});
            resultsDiv.appendChild(resultItem);
        });
    } else {
        resultsDiv.innerHTML = "<p class='no-results'>No results found.</p>";
    }
});
