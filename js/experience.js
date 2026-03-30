// --- Ver mais experiências ---
(function () {
  const btn = document.getElementById("timelineToggle");
  const extra = document.getElementById("timelineExtra");
  if (!btn || !extra) return;

  btn.addEventListener("click", () => {
    const open = extra.classList.toggle("is-open");
    btn.classList.toggle("is-open", open);
    btn.querySelector("span").textContent = open ? "Ver menos" : "Ver mais";

    if (open) {
      extra
        .querySelector(".timeline__item")
        ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
})();
