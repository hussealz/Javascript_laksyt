document.getElementById("searchForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = document.getElementById("query").value.trim();
  if (query) {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      if (!response.ok) throw new Error("Failed to fetch data from the API.");
      const data = await response.json();
      displayResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    console.error("Please enter a valid query.");
  }
});

function displayResults(shows) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = '';

  shows.forEach((tvShow) => {
    const article = document.createElement("article");
    const name = document.createElement("h2");
    const link = document.createElement("a");
    const image = document.createElement("img");
    const summary = document.createElement("div");

    name.textContent = tvShow.show.name;
    link.href = tvShow.show.url;
    link.textContent = "Details";
    link.target = "_blank";

    image.src = tvShow.show.image?.medium
      ? tvShow.show.image.medium
      : "https://via.placeholder.com/210x295?text=Not%20Found";
    image.alt = tvShow.show.name;

    summary.innerHTML = tvShow.show.summary || "No description available.";

    article.appendChild(name);
    article.appendChild(link);
    article.appendChild(image);
    article.appendChild(summary);

    resultsDiv.appendChild(article);
  });
}
