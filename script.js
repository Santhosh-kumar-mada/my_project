const container = document.getElementById("prompt-container");

prompts.forEach((item, index) => {
  const block = document.createElement("div");
  block.className = "prompt-block";
  block.id = `prompt-${index}`;  // Unique ID for each prompt block

  block.innerHTML = `
    <img src="${item.image}" alt="image not found">
    <div>
      <h2>${item.title}</h2>
      <p>${item.description}</p>
    </div>
  `;

  container.appendChild(block);
});
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", function() {
  const query = this.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query === "") return; // empty input - clear results

  // Filter prompts by title match
  const matched = prompts.filter(item => item.title.toLowerCase().includes(query));

  matched.forEach((item, index) => {
    const resultDiv = document.createElement("div");
    resultDiv.textContent = item.title;
    resultDiv.addEventListener("click", () => {
      // Scroll to the prompt block
      document.getElementById(`prompt-${prompts.indexOf(item)}`).scrollIntoView({ behavior: "smooth" });

      // Clear search results and input
      searchResults.innerHTML = "";
      searchInput.value = "";
    });
    searchResults.appendChild(resultDiv);
  });
});
