/* js/video.js — Controles personalizados do vídeo */
(function () {
  const video     = document.getElementById('apresentacaoVideo');
  const progress  = document.getElementById('videoProgress');
  const fill      = document.getElementById('videoProgressFill');
  const thumb     = document.getElementById('videoProgressThumb');
  const timeEl    = document.getElementById('videoTime');
  const btnPlay   = document.getElementById('videoBtnPlay');
  const btnMute   = document.getElementById('videoBtnMute');
  const btnSpeed  = document.getElementById('videoBtnSpeed');
  const btnFull   = document.getElementById('videoBtnFullscreen');

  if (!video) return;

  const speeds = [0.5, 1, 1.25, 1.5, 2];
  let speedIdx = 1;

  // --- Formata segundos em mm:ss ---
  function fmt(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  }

  // --- Play / Pause ---
  function togglePlay() {
    video.paused ? video.play() : video.pause();
  }

  video.addEventListener('play', () => {
    btnPlay.querySelector('.icon-play').style.display  = 'none';
    btnPlay.querySelector('.icon-pause').style.display = '';
  });

  video.addEventListener('pause', () => {
    btnPlay.querySelector('.icon-play').style.display  = '';
    btnPlay.querySelector('.icon-pause').style.display = 'none';
  });

  btnPlay.addEventListener('click', togglePlay);

  // Clique no vídeo também pausa/toca
  video.addEventListener('click', togglePlay);
  video.style.cursor = 'pointer';

  // --- Progresso ---
  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    fill.style.width   = pct + '%';
    thumb.style.left   = pct + '%';
    timeEl.textContent = `${fmt(video.currentTime)} / ${fmt(video.duration)}`;
  });

  video.addEventListener('loadedmetadata', () => {
    timeEl.textContent = `00:00 / ${fmt(video.duration)}`;
  });

  // Clique na barra de progresso
  function seekTo(e) {
    const rect = progress.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.currentTime = pct * video.duration;
  }

  let dragging = false;
  progress.addEventListener('mousedown', (e) => { dragging = true; seekTo(e); });
  document.addEventListener('mousemove', (e) => { if (dragging) seekTo(e); });
  document.addEventListener('mouseup',   ()  => { dragging = false; });

  // Touch support
  progress.addEventListener('touchstart', (e) => { dragging = true; seekTo(e.touches[0]); });
  document.addEventListener('touchmove',  (e) => { if (dragging) seekTo(e.touches[0]); });
  document.addEventListener('touchend',   ()  => { dragging = false; });

  // --- Mute ---
  btnMute.addEventListener('click', () => {
    video.muted = !video.muted;
    btnMute.querySelector('.icon-vol').style.display  = video.muted ? 'none' : '';
    btnMute.querySelector('.icon-mute').style.display = video.muted ? ''     : 'none';
  });

  // --- Velocidade ---
  btnSpeed.addEventListener('click', () => {
    speedIdx = (speedIdx + 1) % speeds.length;
    video.playbackRate    = speeds[speedIdx];
    btnSpeed.textContent  = speeds[speedIdx] + 'x';
  });

  // --- Fullscreen ---
  btnFull.addEventListener('click', () => {
    const container = video.closest('.about__video-frame');
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
  });

  // --- Teclado ---
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    if (e.code === 'ArrowRight') video.currentTime += 5;
    if (e.code === 'ArrowLeft')  video.currentTime -= 5;
    if (e.code === 'KeyM')       btnMute.click();
  });

})();