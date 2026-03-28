/* js/skills.js — Barras HUD segmentadas */
(function () {
  const TOTAL_SEGMENTS = 20; // total de blocos na barra

  // Gera os segmentos HTML
  function buildSegments(container, level) {
    const filled = Math.round((level / 100) * TOTAL_SEGMENTS);

    // Limpa o fill original
    container.innerHTML = "";
    container.style.cssText = "";

    for (let i = 0; i < TOTAL_SEGMENTS; i++) {
      const seg = document.createElement("div");

      // Calcula a cor com degradê baseado na posição do segmento
      const progress = i / (TOTAL_SEGMENTS - 1); // 0 a 1

      // Interpolação: roxo → azul → ciano
      let r, g, b;
      if (progress < 0.5) {
        // roxo → azul
        const t = progress / 0.5;
        r = Math.round(123 - 123 * t); // 123 → 0
        g = Math.round(97 - 17 * t); // 97  → 80
        b = 255;
      } else {
        // azul → ciano
        const t = (progress - 0.5) / 0.5;
        r = 0;
        g = Math.round(80 + 149 * t); // 80  → 229
        b = 255;
      }

      const color = `rgb(${r}, ${g}, ${b})`;
      const colorDim = `rgba(${r}, ${g}, ${b}, 0.5)`;
      const colorGlow = `rgba(${r}, ${g}, ${b}, 0.6)`;

      seg.style.cssText = `
        flex: 1;
        height: 100%;
        border-radius: 1px;
        background: ${
          i < filled
            ? `linear-gradient(180deg, ${color}, ${colorDim})`
            : "rgba(0, 229, 255, 0.07)"
        };
        box-shadow: ${i < filled ? `0 0 4px ${colorGlow}` : "none"};
        transition: background 0.05s ease ${i * 40}ms,
                    box-shadow 0.05s ease ${i * 40}ms;
      `;
      seg.dataset.active = i < filled ? "true" : "false";
      seg.dataset.index = i;
      container.appendChild(seg);
    }
  }

  function animateSegments(bar, level) {
    const filled = Math.round((level / 100) * TOTAL_SEGMENTS);
    const segments = bar.querySelectorAll("[data-index]");

    segments.forEach((seg, i) => {
      if (i < filled) {
        setTimeout(() => {
          const progress = i / (TOTAL_SEGMENTS - 1);

          // Interpolação: roxo → azul → ciano
          let r, g, b;
          if (progress < 0.5) {
            // roxo → azul
            const t = progress / 0.5;
            r = Math.round(123 - 123 * t); // 123 → 0
            g = Math.round(97 - 17 * t); // 97  → 80
            b = 255;
          } else {
            // azul → ciano
            const t = (progress - 0.5) / 0.5;
            r = 0;
            g = Math.round(80 + 149 * t); // 80  → 229
            b = 255;
          }

          const color = `rgb(${r}, ${g}, ${b})`;
          const colorDim = `rgba(${r}, ${g}, ${b}, 0.5)`;
          const colorGlow = `rgba(${r}, ${g}, ${b}, 0.6)`;

          seg.style.background = `linear-gradient(180deg, ${color}, ${colorDim})`;
          seg.style.boxShadow = `0 0 4px ${colorGlow}`;
        }, i * 40);
      }
    });
  }

  function init() {
    const items = document.querySelectorAll(".skill-item");

    items.forEach((item) => {
      const fill = item.querySelector(".skill-item__fill");
      const level = parseInt(fill?.getAttribute("data-level") || "0");
      const bar = item.querySelector(".skill-item__bar");

      if (!bar || !fill) return;

      // Remove o fill original e usa a bar como container de segmentos
      fill.remove();
      buildSegments(bar, level);
    });

    // Anima quando a seção entra na viewport
    const section = document.getElementById("skills");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          document.querySelectorAll(".skill-item").forEach((item) => {
            const bar = item.querySelector(".skill-item__bar");
            const level = parseInt(item.dataset.level || "0");

            // Recupera o level do primeiro segmento data
            const segs = bar?.querySelectorAll("[data-index]");
            if (!segs) return;

            const filled = segs.length
              ? Math.round(
                  ((parseInt(
                    item
                      .querySelector("[data-active]")
                      ?.closest(".skill-item")
                      ?.querySelector(
                        '.skill-item__bar [data-active="true"]:last-of-type',
                      )?.dataset.index || "0",
                  ) +
                    1) /
                    TOTAL_SEGMENTS) *
                    100,
                )
              : 0;

            animateSegments(bar, level);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
  }

  // Guarda o level no skill-item para recuperar depois
  document.querySelectorAll(".skill-item").forEach((item) => {
    const fill = item.querySelector(".skill-item__fill");
    if (fill) item.dataset.level = fill.getAttribute("data-level") || "0";
  });

  init();
})();

// --- Dialog 8-bit ao clicar na skill ---
(function () {
  // Cria o elemento do dialog uma vez
  const dialog = document.createElement("div");
  dialog.className = "skill-dialog";
  dialog.innerHTML = `
      <div class="skill-dialog__box">
        <div class="skill-dialog__title" id="dialogTitle"></div>
        <div class="skill-dialog__entries" id="dialogEntries"></div>
        <div class="skill-dialog__tail"></div>
      </div>
    `;
  document.body.appendChild(dialog);

  const titleEl = dialog.querySelector("#dialogTitle");
  const entriesEl = dialog.querySelector("#dialogEntries");
  let activeItem = null;

  function show(item, e) {
    const name = item.querySelector(".skill-item__name").textContent;
    const exp = item.dataset.exp || "Experiência não especificada";

    titleEl.innerHTML = `⚔ ${name} <span class="skill-dialog__cursor"></span>`;

    entriesEl.innerHTML = exp
      .split("|")
      .map(
        (e) => `
        <div class="skill-dialog__entry">${e.trim()}</div>
      `,
      )
      .join("");

    // Mostra temporariamente para medir altura
    dialog.style.visibility = "hidden";
    dialog.classList.add("is-visible");

    const rect = item.getBoundingClientRect();
    const dh = dialog.offsetHeight;
    const dw = dialog.offsetWidth || 280;

    // Position: fixed — usa coordenadas da viewport, sem scrollY
    let left = rect.left;
    let top = rect.top - dh - 14;

    // Evita sair pela direita
    if (left + dw > window.innerWidth - 16) {
      left = window.innerWidth - dw - 16;
    }

    // Se não couber acima, mostra abaixo
    if (top < 10) {
      top = rect.bottom + 10;
    }

    dialog.style.left = left + "px";
    dialog.style.top = top + "px";
    dialog.style.visibility = "visible";
    activeItem = item;
  }

  function hide() {
    dialog.classList.remove("is-visible");
    activeItem = null;
  }

  // Clique nas skills
  document.querySelectorAll(".skill-item").forEach((item) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeItem === item) {
        hide();
      } else {
        show(item, e);
      }
    });
  });

  // Fecha clicando fora
  document.addEventListener("click", hide);

  // Fecha com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hide();
  });

  // Fecha ao rolar a página
  window.addEventListener("scroll", hide, { passive: true });
})();
