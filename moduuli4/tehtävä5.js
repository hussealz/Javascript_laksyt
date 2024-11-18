document.getElementById("getJokeButton").addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if (!response.ok) throw new Error("Failed to fetch the joke.");
    const data = await response.json();
    document.getElementById("jokeContainer").innerText = data.value;
  } catch (error) {
    console.error("Error:", error);
  }
});

