/* js/conversion.js — Frases rotativas e botão CTA */
// --- Frases de conversão rotativas ---
(function () {
  const el = document.getElementById("conversionPhrase");
  if (!el) return;

  const frases = [
    'Apresente-se de forma profissional, com <span class="conversion__highlight">excelência</span>.',
    'Imagine uma página personalizada, <span class="conversion__highlight"><br>só sua</span>.',
    'Aumente as chances de <span class="conversion__highlight">conectar-se</span> às oportunidades.',
    'Sua presença digital começa com uma <span class="conversion__highlight"><br>boa impressão</span>.',
    'Do zero ao ar — rápido, <span class="conversion__highlight">exclusivo</span> e profissional.',
    'Estabeleça sua presença <span class="conversion__highlight">online</span>.',
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
