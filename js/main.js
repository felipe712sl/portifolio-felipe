(function () {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// --- Animação matrix ao clicar no logo ---
(function () {
  const logo = document.querySelector(".nav__logo");
  if (!logo) return;

  logo.style.cursor = "pointer";

  logo.addEventListener("click", () => {
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Cria canvas overlay
    const canvas = document.createElement("canvas");
    canvas.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      z-index: 9997;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / 18);
    const drops = Array(cols)
      .fill(0)
      .map(() => Math.random() * -50);
    let frame = 0;
    let animId;

    // Fade in
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    function draw() {
      ctx.fillStyle = "rgba(8, 12, 20, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '14px "JetBrains Mono", monospace';

      drops.forEach((y, i) => {
        const char = Math.random() > 0.5 ? "1" : "0";
        const alpha = Math.random() * 0.6 + 0.4;

        // Cor primária no topo da gota, esmaece abaixo
        if (y * 18 < canvas.height * 0.3) {
          ctx.fillStyle = `rgba(0, 229, 255, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(0, 229, 255, ${alpha * 0.4})`;
        }

        ctx.fillText(char, i * 18, y * 18);
        drops[i] += 0.5 + Math.random() * 0.5;

        // Reinicia a gota aleatoriamente
        if (drops[i] * 18 > canvas.height && Math.random() > 0.97) {
          drops[i] = 0;
        }
      });

      frame++;

      // Fade out (cada 100 = 0,6 segundos)
      if (frame > 100) {
        canvas.style.transition = "opacity 0.8s ease";
        canvas.style.opacity = "0";
        setTimeout(() => canvas.remove(), 900);
        return;
      }

      animId = requestAnimationFrame(draw);
    }

    draw();
  });
})();

(function () {
  const photo = document.getElementById("profilePhoto");
  if (!photo) return;

  photo.style.cursor = "zoom-in";

  photo.addEventListener("click", () => {
    // Cria overlay
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(8px);
      z-index: 9998;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: zoom-out;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    // Botão fechar
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "×";
    closeBtn.style.cssText = `
      position: absolute;
      top: 12px;
      right: 12px;
      width: 25px;
      height: 25px;
      border-radius: 20%;
      background: rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(255, 255, 255, 0);
      color: rgb(255, 255, 255, 0.2);
      font-size: 26px;
      line-height: 1;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transition: background 0.2s ease, transform 0.2s ease;
    `;

    closeBtn.addEventListener("mouseenter", () => {
      closeBtn.style.background = "rgba(0,0,0,0.2)";
      closeBtn.style.transform = "scale(1.1)";
    });
    closeBtn.addEventListener("mouseleave", () => {
      closeBtn.style.background = "rgba(0,0,0,0.1)";
      closeBtn.style.transform = "scale(1)";
    });

    // Cria imagem ampliada
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt;
    img.style.cssText = `
      max-width: 90vw;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 12px;
      border: 1px solid rgba(0, 229, 255, 0.3);
      box-shadow: 0 0 60px rgba(0, 229, 255, 0.15);
      transform: scale(0.92);
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    `;

    const wrapper = document.createElement("div");
    wrapper.style.cssText = `
      position: relative;
      display: inline-block;
    `;

    wrapper.appendChild(img);
    wrapper.appendChild(closeBtn);
    overlay.appendChild(wrapper);
    document.body.appendChild(overlay);

    document.body.style.overflow = "hidden";

    // Anima entrada
    requestAnimationFrame(() => {
      overlay.style.opacity = "1";
      img.style.transform = "scale(1)";
    });

    // Fecha ao clicar
    function fechar() {
      overlay.style.opacity = "0";
      img.style.transform = "scale(0.92)";
      setTimeout(() => {
        overlay.remove();
        document.body.style.overflow = "";
      }, 300);
    }

    overlay.addEventListener("click", fechar);

    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // ← evita disparar o fechar do overlay também
      fechar();
    });

    // Fecha com ESC
    document.addEventListener("keydown", function handler(e) {
      if (e.key === "Escape") {
        fechar();
        document.removeEventListener("keydown", handler);
      }
    });
  });
})();

// --- Scroll Navigator ---
(function () {
  // Referência ao botão fixo na tela
  const btn = document.getElementById("scrollNav");
  if (!btn) return;

  // Lista ordenada de todas as seções + footer para navegação
  const sections = Array.from(document.querySelectorAll("section[id], footer"));

  // Timer que controla o desaparecimento após 2s parado
  let hideTimer;

  // -------------------------------------------------------
  // getAtual()
  // Retorna o índice da seção atualmente visível na tela.
  // Se o usuário estiver perto do fim da página (100px),
  // retorna o último índice diretamente — evita que o
  // footer seja ignorado por ter pouca altura.
  // -------------------------------------------------------
  function getAtual() {
    const nearBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
    if (nearBottom) return sections.length - 1;

    let idx = 0;
    sections.forEach((s, i) => {
      if (s.getBoundingClientRect().top <= window.innerHeight * 0.5) idx = i;
    });
    return idx;
  }

  // -------------------------------------------------------
  // atualizarLabel()
  // Atualiza o texto do botão conforme a posição na página:
  // — Em qualquer seção normal: mostra "scroll ↓"
  // — No fim da página (footer): mostra "topo ↑"
  // Também adiciona/remove a classe is-top para mudar a cor
  // via CSS (.scroll-nav.is-top)
  // -------------------------------------------------------
  function atualizarLabel() {
    const label = btn.querySelector(".scroll-nav__label");
    const atual = getAtual();
    if (atual === sections.length - 1) {
      label.textContent = "topo ↑";
      btn.classList.add("is-top");
    } else {
      label.textContent = "scroll ↓";
      btn.classList.remove("is-top");
    }
  }

  // -------------------------------------------------------
  // mostrar()
  // Torna o botão visível adicionando is-visible.
  // Cancela o timer anterior (clearTimeout) e agenda um
  // novo para esconder o botão após 2 segundos sem rolagem.
  // -------------------------------------------------------
  function mostrar() {
    btn.classList.add("is-visible");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      btn.classList.remove("is-visible");
    }, 2000);
  }

  // -------------------------------------------------------
  // Evento: scroll
  // Disparado toda vez que o usuário rola a página.
  // Chama mostrar() para exibir o botão e reiniciar o timer,
  // e atualizarLabel() para manter o texto correto.
  // passive: true melhora a performance no mobile.
  // -------------------------------------------------------
  window.addEventListener(
    "scroll",
    () => {
      mostrar();
      atualizarLabel();
    },
    { passive: true },
  );

  // -------------------------------------------------------
  // Evento: click
  // Navega para a próxima seção da lista.
  // Se já estiver na última seção (footer), volta ao topo.
  // Chama mostrar() para manter o botão visível durante
  // a navegação animada.
  // -------------------------------------------------------
  btn.addEventListener("click", () => {
    const atual = getAtual();
    const proxima = sections[atual + 1];
    if (proxima) {
      proxima.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    mostrar();
  });
})();

// --- Animação matrix no nome do footer ---
(function () {
  const logoFooter = document.querySelector(".footer__logo");
  if (!logoFooter) return;

  logoFooter.style.cursor = "pointer";

  logoFooter.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const canvas = document.createElement("canvas");
    canvas.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      z-index: 9997;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / 18);
    // drops começa na base e sobe
    const drops = Array(cols)
      .fill(0)
      .map(() => Math.floor(canvas.height / 18) + Math.random() * 20);
    let frame = 0;

    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    function draw() {
      ctx.fillStyle = "rgba(8, 12, 20, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '14px "JetBrains Mono", monospace';

      drops.forEach((y, i) => {
        const char = Math.random() > 0.5 ? "1" : "0";
        const alpha = Math.random() * 0.6 + 0.4;

        // Cor primária na base da gota, esmaece acima
        if (y * 18 > canvas.height * 0.7) {
          ctx.fillStyle = `rgba(0, 229, 255, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(0, 229, 255, ${alpha * 0.4})`;
        }

        ctx.fillText(char, i * 18, y * 18);
        drops[i] -= 0.5 + Math.random() * 0.5; // ← sobe em vez de descer

        // Reinicia gota aleatoriamente quando sai pelo topo
        if (drops[i] * 18 < 0 && Math.random() > 0.97) {
          drops[i] = Math.floor(canvas.height / 18);
        }
      });

      frame++;

      //Tempo de execução
      if (frame > 100) {
        canvas.style.transition = "opacity 0.8s ease";
        canvas.style.opacity = "0";
        setTimeout(() => canvas.remove(), 900);
        return;
      }

      requestAnimationFrame(draw);
    }

    draw();
  });
})();

// --- Frases de conversão rotativas ---
(function () {
  const el = document.getElementById("conversionPhrase");
  if (!el) return;

  const frases = [
    'Apresente-se de forma profissional, com <span class="conversion__highlight">excelência</span>.',
    'Imagine uma página personalizada, <span class="conversion__highlight">só sua</span>.',
    'Aumente as chances de <span class="conversion__highlight">conectar-se</span> às oportunidades.',
    'Sua presença digital começa com uma <span class="conversion__highlight">boa impressão</span>.',
    'Do zero ao ar — rápido, <span class="conversion__highlight">exclusivo</span> e profissional.',
  ];

  // Embaralha o array sem repetir até encerrar o ciclo
  function embaralhar(arr) {
    const copia = [...arr];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  let fila = embaralhar(frases);
  let idx = 0;

  function proximaFrase() {
    // Sai com fade up
    el.classList.add("is-leaving");

    setTimeout(() => {
      // Se chegou ao fim do ciclo, embaralha novamente
      if (idx >= fila.length) {
        fila = embaralhar(frases);
        idx = 0;
      }

      el.innerHTML = fila[idx];
      idx++;

      el.classList.remove("is-leaving");
      el.classList.add("is-entering");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.remove("is-entering");
        });
      });
    }, 500);
  }

  // Exibe a primeira frase imediatamente
  el.innerHTML = fila[idx];
  idx++;

  //A cada 100 = 0,1s
  setInterval(proximaFrase, 5000);
})();

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

// --- Botão conversão preenche formulário ---
(function () {
  const btn = document.getElementById("conversionCta");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  if (!btn || !subject || !message) return;

  btn.addEventListener("click", () => {
    // Aguarda o scroll terminar antes de preencher
    setTimeout(() => {
      subject.value = "Quero meu site profissional";
      message.value =
        "Olá Felipe, vim pela sua página e gostaria de saber mais sobre o desenvolvimento de uma página de apresentação personalizada. Pode me passar mais detalhes?";

      // Destaca o campo de nome para o usuário preencher
      document.getElementById("name")?.focus();
    }, 800);
  });
})();
