/* js/projects.js — Carrossel de projetos */
// --- Carrossel de projetos ---
(function () {
  const grid = document.getElementById("projectsGrid");
  const prev = document.getElementById("projectsPrev");
  const next = document.getElementById("projectsNext");

  if (!grid || !prev || !next) return;

  let atual = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function getCardWidth() {
    const cards = grid.querySelectorAll(".project-card");
    if (cards.length < 2) {
      const card = cards[0];
      const gap = parseInt(getComputedStyle(grid).columnGap) || 24;
      return (card?.offsetWidth || 0) + gap;
    }
    // Usa a diferença real entre o início do card 1 e card 2
    return cards[1].offsetLeft - cards[0].offsetLeft;
  }

  function getVisiveis() {
    const wrap = grid.parentElement;
    const card = grid.querySelector(".project-card");
    if (!card || !wrap) return 1;
    return Math.max(1, Math.floor(wrap.offsetWidth / card.offsetWidth));
  }

  function total() {
    return grid.querySelectorAll(".project-card").length;
  }

  function atualizar() {
    const offset = atual * getCardWidth();
    grid.style.transform = `translateX(-${offset}px)`;

    const max = total() - getVisiveis();
    prev.disabled = atual === 0;
    next.disabled = atual >= max;
  }

  function irPrev() {
    if (atual > 0) {
      atual--;
      atualizar();
    }
  }

  function irNext() {
    const max = total() - getVisiveis();
    if (atual < max) {
      atual++;
      atualizar();
    }
  }

  prev.addEventListener("click", irPrev);
  next.addEventListener("click", irNext);

  // --- Swipe touch ---
  grid.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true },
  );

  grid.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        // ← threshold mínimo de 50px
        if (diff > 0) irNext();
        else irPrev();
      }
    },
    { passive: true },
  );

  // Inicializa
  atualizar();
  window.addEventListener("resize", atualizar, { passive: true });
})();
