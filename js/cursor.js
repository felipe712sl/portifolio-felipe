/* js/cursor.js — Custom cursor */
(function () {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursorFollower");

  if (!cursor || !follower) return;

  let mouseX = 0,
    mouseY = 0;
  let followerX = 0,
    followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.14;
    followerY += (mouseY - followerY) * 0.14;
    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover states
  const hoverTargets =
    "a, button, .skill-tag, .stat-card, .project-card, .edu-card, .contact__channel, .form-input, .form-textarea";
  document.querySelectorAll(hoverTargets).forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("is-hovering");
      follower.classList.add("is-hovering");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("is-hovering");
      follower.classList.remove("is-hovering");
    });
  });
})();
