// Wachtlaag homepage mock animatie
// Start de CSS-loop zodra de mock in beeld komt (en respecteert reduced motion).
(() => {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const mocks = document.querySelectorAll('.mock-anim');
  if (!mocks.length) return;

  const start = (el) => {
    // Restart animaties netjes (handig als je terug-scrollt)
    el.classList.remove('is-playing');
    // Force reflow
    void el.offsetHeight;
    el.classList.add('is-playing');
  };

  if (!('IntersectionObserver' in window)) {
    mocks.forEach(start);
    return;
  }

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) start(entry.target);
      else entry.target.classList.remove('is-playing');
    }
  }, { threshold: 0.35 });

  mocks.forEach((el) => io.observe(el));
})();
