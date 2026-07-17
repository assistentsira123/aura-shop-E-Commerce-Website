/* ==========================================================================
   Testimonials carousel component
   Slides the track by one card at a time; recalculates step on resize.
   ========================================================================== */
(function () {
  const wrap = document.querySelector('.testimonials__track-wrap');
  const track = document.querySelector('.testimonials__track');
  if (!wrap || !track) return;

  const prevBtn = document.querySelector('[data-t-prev]');
  const nextBtn = document.querySelector('[data-t-next]');
  const dotsWrap = document.querySelector('.testimonials__dots');
  const cards = Array.from(track.children);

  let index = 0;

  const visibleCount = () => {
    const w = window.innerWidth;
    if (w <= 620) return 1;
    if (w <= 900) return 2;
    return 3;
  };

  const maxIndex = () => Math.max(0, cards.length - visibleCount());

  const update = () => {
    const step = cards[0].getBoundingClientRect().width + 24; /* card + gap */
    track.style.transform = `translateX(-${index * step}px)`;
    if (dotsWrap) {
      Array.from(dotsWrap.children).forEach((d, i) => {
        d.classList.toggle('is-active', i === index);
      });
    }
  };

  const buildDots = () => {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Show testimonial ${i + 1}`);
      dot.addEventListener('click', () => {
        index = Math.min(i, maxIndex());
        update();
      });
      dotsWrap.appendChild(dot);
    });
  };

  prevBtn?.addEventListener('click', () => {
    index = index <= 0 ? maxIndex() : index - 1;
    update();
  });
  nextBtn?.addEventListener('click', () => {
    index = index >= maxIndex() ? 0 : index + 1;
    update();
  });

  window.addEventListener('resize', () => {
    index = Math.min(index, maxIndex());
    update();
  });

  buildDots();
  update();
})();
