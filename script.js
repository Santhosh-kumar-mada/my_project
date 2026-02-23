const container = document.getElementById("prompt-container");
const searchInput = document.getElementById("search-input");
const searchResultsEl = document.getElementById("search-results");

// ── LAZY LOAD IMAGE HELPER ──
function lazyImg(src, altText) {
  const img = document.createElement("img");
  img.alt = altText || "";
  img.loading = "lazy"; // native lazy load
  img.decoding = "async";

  // Add loaded class once image finishes loading
  img.addEventListener("load", () => img.classList.add("loaded"));
  img.addEventListener("error", () => img.classList.add("loaded")); // still show slot even on error

  img.src = src; // set src AFTER attaching listener
  return img;
}

// ── COPY TO CLIPBOARD HELPER ──
function makeCopyBtn(text) {
  const btn = document.createElement("button");
  btn.className = "copy-btn";
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
    Copy Prompt`;

  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(text).then(() => {
      btn.classList.add("copied");
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        Copied!`;
      setTimeout(() => {
        btn.classList.remove("copied");
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          Copy Prompt`;
      }, 2000);
    });
  });
  return btn;
}

// ── BUILD CARDS ──
prompts.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "prompt-card";
  card.id = `prompt-${index}`;

  // Extract numeric prefix for display (e.g. "1." → "01")
  const numMatch = item.title.match(/^(\d+)/);
  const numLabel = numMatch ? String(numMatch[1]).padStart(2, "0") : String(index + 1).padStart(2, "0");
  const cleanTitle = item.title.replace(/^\d+\.\s*/, "");

  // Image
  const imgWrap = document.createElement("div");
  imgWrap.className = "card-image-wrap";
  imgWrap.appendChild(lazyImg(item.image, cleanTitle));

  // Content
  const content = document.createElement("div");
  content.className = "card-content";

  const topArea = document.createElement("div");
  topArea.innerHTML = `
    <span class="card-number">Prompt ${numLabel}</span>
    <h2>${cleanTitle}</h2>
    <p>${item.description}</p>
  `;

  const footer = document.createElement("div");
  footer.className = "card-footer";
  footer.appendChild(makeCopyBtn(item.description));

  const tag = document.createElement("span");
  tag.className = "card-tag";
  tag.textContent = "AI Prompt";
  footer.appendChild(tag);

  content.appendChild(topArea);
  content.appendChild(footer);

  card.appendChild(imgWrap);
  card.appendChild(content);
  container.appendChild(card);
});

// ── NAVIGATE TO SEARCH RESULTS PAGE ──
function goToSearch() {
  const q = searchInput.value.trim();
  if (q) window.location.href = "search-results.html?q=" + encodeURIComponent(q);
}

// Trigger on Enter key
searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") { goToSearch(); return; }
  if (e.key === "Escape") {
    searchResultsEl.classList.remove("visible");
    searchInput.blur();
  }
});

// Trigger on search icon click
document.querySelector(".search-icon").style.cursor = "pointer";
document.querySelector(".search-icon").addEventListener("click", goToSearch);

// ── LIVE DROPDOWN PREVIEW (while typing) ──
searchInput.addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();
  searchResultsEl.innerHTML = "";

  if (!query) { searchResultsEl.classList.remove("visible"); return; }

  const matched = prompts.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );

  if (matched.length === 0) {
    searchResultsEl.innerHTML = `<div class="search-no-results">No prompts found for "<strong>${query}</strong>"</div>`;
    searchResultsEl.classList.add("visible");
    return;
  }

  // Header row with "See all results" link
  const header = document.createElement("div");
  header.className = "search-results-header";
  header.innerHTML = `${matched.length} result${matched.length !== 1 ? "s" : ""} — <span style="color:var(--accent);cursor:pointer;" id="see-all-link">See full results page →</span>`;
  searchResultsEl.appendChild(header);
  document.getElementById("see-all-link").addEventListener("click", goToSearch);

  matched.slice(0, 5).forEach(item => {
    const idx = prompts.indexOf(item);
    const cleanTitle = item.title.replace(/^\d+\.\s*/, "");
    const descSnippet = item.description.length > 80 ? item.description.slice(0, 80) + "…" : item.description;

    const row = document.createElement("div");
    row.className = "search-result-item";

    const thumb = document.createElement("img");
    thumb.className = "search-result-thumb";
    thumb.src = item.image; thumb.alt = cleanTitle; thumb.loading = "lazy";

    const info = document.createElement("div");
    info.className = "search-result-info";
    info.innerHTML = `
      <div class="search-result-title">${cleanTitle}</div>
      <div class="search-result-desc">${descSnippet}</div>
    `;

    const arrow = document.createElement("span");
    arrow.className = "search-result-arrow";
    arrow.textContent = "›";

    row.appendChild(thumb); row.appendChild(info); row.appendChild(arrow);

    row.addEventListener("click", () => {
      // Quick scroll on same page
      const target = document.getElementById(`prompt-${idx}`);
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.classList.add("highlight");
      setTimeout(() => target.classList.remove("highlight"), 1800);
      searchResultsEl.classList.remove("visible");
      searchInput.value = "";
    });

    searchResultsEl.appendChild(row);
  });

  // If more than 5 results, show a "view all" footer row
  if (matched.length > 5) {
    const more = document.createElement("div");
    more.style.cssText = "padding:12px 16px;text-align:center;font-size:0.82rem;color:var(--accent);cursor:pointer;border-top:1px solid rgba(255,255,255,0.06);";
    more.textContent = `View all ${matched.length} results →`;
    more.addEventListener("click", goToSearch);
    searchResultsEl.appendChild(more);
  }

  searchResultsEl.classList.add("visible");
});

// Close dropdown when clicking outside
document.addEventListener("click", e => {
  if (!e.target.closest(".search-wrapper")) {
    searchResultsEl.classList.remove("visible");
  }
});
