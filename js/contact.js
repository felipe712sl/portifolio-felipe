/* js/contact.js — Formulário envia via WhatsApp */
(function () {
  const form   = document.getElementById('contactForm');
  const note   = document.getElementById('formNote');
  const btn    = form?.querySelector('button[type="submit"]');
  const btnTxt = btn?.querySelector('span');

  if (!form) return;

  // ================================================
  // SEU NÚMERO com código do país — sem espaços ou símbolos
  // 55 = Brasil, 24 = DDD, restante = número
  const WHATSAPP_NUMBER = '5524999063455';
  // ================================================

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    note.className   = 'form-note';
    note.textContent = '';

    // Validação
    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const subject = form.subject?.value.trim() || '';
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      note.textContent = '// Preencha nome, e-mail e mensagem.';
      note.className   = 'form-note error';
      limparNote();
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      note.textContent = '// E-mail inválido.';
      note.className   = 'form-note error';
      limparNote();
      return;
    }

    // Monta o texto da mensagem
    const texto = [
      ` *Nome:* ${name}`,
      ` *E-mail:* ${email}`,
      subject ? ` *Assunto:* ${subject}` : '',
      ` *Mensagem:*\n${message}`,
    ].filter(Boolean).join('\n');

    // Codifica e abre WhatsApp
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');

    note.textContent = '// Redirecionando para o WhatsApp...';
    note.className   = 'form-note success';
    limparNote();
    form.reset();

    // Limpa a mensagem após 10 segundos
    function limparNote() {
      setTimeout(() => {
        note.textContent = '';
        note.className   = 'form-note';
      }, 5000);
    }
  });
})();