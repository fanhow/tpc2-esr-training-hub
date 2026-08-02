(() => {
  const images = Array.from(document.querySelectorAll(".oaic-step-shot"));
  if (!images.length) return;

  const overlay = document.createElement("div");
  overlay.className = "oaic-image-zoom";
  overlay.hidden = true;
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Image preview");
  overlay.innerHTML = `
    <div class="oaic-image-zoom__toolbar">
      <button type="button" data-zoom="out" aria-label="Zoom out">−</button>
      <button type="button" data-zoom="reset" aria-label="Reset zoom">100%</button>
      <button type="button" data-zoom="in" aria-label="Zoom in">＋</button>
      <button type="button" data-zoom="close" aria-label="Close image">✕</button>
    </div>
    <div class="oaic-image-zoom__viewport">
      <img class="oaic-image-zoom__image" alt="">
    </div>
  `;
  document.body.appendChild(overlay);

  const preview = overlay.querySelector(".oaic-image-zoom__image");
  const viewport = overlay.querySelector(".oaic-image-zoom__viewport");
  const resetButton = overlay.querySelector('[data-zoom="reset"]');
  const closeButton = overlay.querySelector('[data-zoom="close"]');
  let scale = 1;
  let previousFocus = null;

  const applyScale = () => {
    preview.style.transform = `scale(${scale})`;
    resetButton.textContent = `${Math.round(scale * 100)}%`;
  };

  const setScale = (nextScale) => {
    scale = Math.min(3.5, Math.max(0.5, nextScale));
    applyScale();
  };

  const open = (source) => {
    previousFocus = document.activeElement;
    preview.src = source.currentSrc || source.src;
    preview.alt = source.alt || "";
    scale = 1;
    applyScale();
    viewport.scrollTo(0, 0);
    overlay.hidden = false;
    document.body.classList.add("oaic-zoom-open");
    closeButton.focus();
  };

  const close = () => {
    overlay.hidden = true;
    preview.removeAttribute("src");
    document.body.classList.remove("oaic-zoom-open");
    if (previousFocus) previousFocus.focus();
  };

  images.forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `${image.alt || "Image"} — open enlarged view`);
    image.addEventListener("click", () => open(image));
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(image);
      }
    });
  });

  overlay.addEventListener("click", (event) => {
    const action = event.target.closest("[data-zoom]")?.dataset.zoom;
    if (action === "in") setScale(scale + 0.25);
    if (action === "out") setScale(scale - 0.25);
    if (action === "reset") setScale(1);
    if (action === "close") close();
    if (event.target === overlay) close();
  });

  document.addEventListener("keydown", (event) => {
    if (overlay.hidden) return;
    if (event.key === "Escape") close();
    if (event.key === "+" || event.key === "=") setScale(scale + 0.25);
    if (event.key === "-") setScale(scale - 0.25);
    if (event.key === "0") setScale(1);
  });
})();
