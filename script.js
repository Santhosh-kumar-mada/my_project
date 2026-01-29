const container = document.getElementById("prompt-container");

prompts.forEach(item => {
  const block = document.createElement("div");
  block.className = "prompt-block";

  block.innerHTML = `
    <img src="${item.image}" alt="image not found">
    <div>
      <h2>${item.title}</h2>
      <p>${item.description}</p>
    </div>
  `;

  container.appendChild(block);
});
