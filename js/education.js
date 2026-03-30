/* js/education.js — Ver mais certificações */
// --- Ver mais certificações ---
(function () {
  const btn = document.getElementById("educationToggle");
  const extra = document.getElementById("educationExtra");
  if (!btn || !extra) return;

  btn.addEventListener("click", () => {
    const open = extra.classList.toggle("is-open");
    btn.classList.toggle("is-open", open);
    btn.querySelector("span").textContent = open ? "Ver menos" : "Ver mais";

    // Scroll suave para os novos cards ao abrir
    if (open) {
      extra
        .querySelector(".edu-card")
        ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
})();
