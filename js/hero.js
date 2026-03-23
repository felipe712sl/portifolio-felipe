/* js/hero.js — Terminal typing effect + role rotator */
(function () {

  // --- Terminal typing ---
  const cmdEl = document.getElementById('terminalCmd');
  const commands = [
    'whoami',
    'cat perfil.txt',
    'ping recrutador.local',
    'ssh felipe@suporte-ti',
    'git log --oneline',
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
  const roleEl = document.getElementById('rotatingRole');
  const roles = [
    'Suporte Técnico',
    'Help Desk N1/N2',
    'Infraestrutura de TI',
    'Projetos de Redes',
    'Desenvolvimento Web',
  ];
  let roleIndex = 0;

  function rotateRole() {
    if (!roleEl) return;
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.classList.add('is-animating');
    setTimeout(() => {
      roleEl.textContent = roles[roleIndex];
      roleEl.classList.remove('is-animating');
    }, 400);
  }

  setInterval(rotateRole, 2800);

})();
