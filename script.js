// Reveal sections on scroll
const revealElements = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});
