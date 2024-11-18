document.getElementById("searchForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const query = document.getElementById("query").value;
  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log("Search Results:", data);
      displayResults(data);
    })
    .catch(error => console.error("Fetch error:", error));
});

function displayResults(shows) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  shows.forEach(show => {
    const showInfo = document.createElement("div");
    showInfo.innerHTML = `
      <h2>${show.show.name}</h2>
      <p>${show.show.summary || "No description available."}</p>
    `;
    resultsDiv.appendChild(showInfo);
  });
}
