/* js/hero.js — Terminal typing effect + role rotator */
(function () {
  // --- Terminal typing ---
  const cmdEl = document.getElementById("terminalCmd");
  const commands = [
    "whoami",
    "cat perfil.txt",
    "ping support.local",
    "ssh felipe@suporte-ti",
    "git log --oneline",
  ];
  let cmdIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeCmd() {
    if (!cmdEl) return;
    const current = commands[cmdIndex];

    if (!isDeleting) {
      cmdEl.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(typeCmd, 1800);
        return;
      }
    } else {
      cmdEl.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        cmdIndex = (cmdIndex + 1) % commands.length;
        setTimeout(typeCmd, 400);
        return;
      }
    }

    setTimeout(typeCmd, isDeleting ? 60 : 100);
  }

  setTimeout(typeCmd, 1200);

  // --- Role rotator ---
  const roleEl = document.getElementById("rotatingRole");
  const roles = [
    "Suporte Técnico",
    "Help Desk N1/N2",
    "Infraestrutura de TI",
    "Projetos de Redes",
    "Automação IoT",
    "Desenvolvimento Web",
  ];
  let roleIndex = 0;

  function rotateRole() {
    if (!roleEl) return;
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.classList.add("is-animating");
    setTimeout(() => {
      roleEl.textContent = roles[roleIndex];
      roleEl.classList.remove("is-animating");
    }, 400);
  }

  setInterval(rotateRole, 2800);
})();

// --- Status de disponibilidade ---
(function () {
  const status = document.querySelector(".hero__status");
  if (!status) return;

  // ================================================
  // ALTERE AQUI para mudar o status

  // const MODO = "disponivel"; // verde
  // const MODO = "ocupado"; // vermelho
  // const MODO = "freelance"; // ciano
  // const MODO = "trabalhando"; // amarelo
  // const MODO = "ferias"; // branco

  const MODO = "freelance";
  // ================================================

  const config = {
    disponivel: {
      texto: "Disponível",
      cor: "var(--clr-green)",
      fundo: "var(--clr-green-dim)",
      borda: "rgba(0, 255, 163, 0.2)",
    },
    ocupado: {
      texto: "Indisponível no momento",
      cor: "#ff6b6b",
      fundo: "rgba(255, 107, 107, 0.1)",
      borda: "rgba(255, 107, 107, 0.2)",
    },
    freelance: {
      texto: "Disponível para freelance",
      cor: "var(--clr-primary)",
      fundo: "var(--clr-primary-dim)",
      borda: "rgba(0, 229, 255, 0.2)",
    },
    trabalhando: {
      texto: "Trabalhando",
      cor: "#f5c842",
      fundo: "rgba(245, 200, 66, 0.1)",
      borda: "rgba(245, 200, 66, 0.2)",
    },
    ferias: {
      texto: "De férias — retorno em breve",
      cor: "#f0f0f0",
      fundo: "rgba(240, 240, 240, 0.08)",
      borda: "rgba(240, 240, 240, 0.15)",
    },
  };

  const atual = config[MODO] || config.disponivel;

  // 1. Aplica a variável CSS --dot-color no container
  //    O dot herda essa variável automaticamente via CSS
  status.style.setProperty("--dot-color", atual.cor);

  // 2. Aplica as cores no container do status
  status.style.color = atual.cor;
  status.style.background = atual.fundo;
  status.style.border = `1px solid ${atual.borda}`;

  // 3. Atualiza o texto mantendo o dot existente no HTML
  const dot = status.querySelector(".hero__status-dot");
  status.innerHTML = "";

  if (dot) status.appendChild(dot);

  const span = document.createElement("span");
  span.textContent = atual.texto;
  status.appendChild(span);

  // 4. Reaplica a variável após recriar o innerHTML
  //    (innerHTML limpa os estilos inline do container)
  status.style.setProperty("--dot-color", atual.cor);
  status.style.color = atual.cor;
  status.style.background = atual.fundo;
  status.style.border = `1px solid ${atual.borda}`;
})();
