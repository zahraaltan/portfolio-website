/* Register the ScrollTrigger plugin */
gsap.registerPlugin(ScrollTrigger);

/* Animate About Section Content on scroll */
gsap.from(".about-content", {
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 80%"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});

/* Animate each Portfolio Item when in view */
gsap.utils.toArray(".portfolio-item").forEach(item => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});

/* Animate Contact Form on scroll */
gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});

/* Toggle rotation pause/resume on nav link click */
document.querySelectorAll('.rotating-nav a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('rotatingNav');
    const currentState = window.getComputedStyle(nav).animationPlayState;
    nav.style.animationPlayState = currentState === 'running' ? 'paused' : 'running';
  });
});
