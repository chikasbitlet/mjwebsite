document.addEventListener('DOMContentLoaded', () => {
  // Open order form
  const openFormBtn = document.getElementById('openFormBtn');
  const openFormText = document.getElementById('openFormText');
  const formSection = document.getElementById('formSection');

  if (openFormBtn) {
    openFormBtn.addEventListener('click', () => {
      formSection.classList.remove('hidden');
      formSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (openFormText && openFormBtn) {
    openFormText.addEventListener('click', () => openFormBtn.click());
  }

  // Work slider
  const slider = document.getElementById('workSlider');
  const nextBtn = document.getElementById('nextWork');
  const prevBtn = document.getElementById('prevWork');

  let scrollAmount = 0;
  const slideWidth = 260;

  if (nextBtn && slider) {
  nextBtn.addEventListener('click', () => {
    const maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;
    scrollAmount += slideWidth;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });
}

if (prevBtn && slider) {
  prevBtn.addEventListener('click', () => {
    scrollAmount -= slideWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });
}

/* =========================
   TOUCH / SWIPE SUPPORT
   ========================= */

let startX = 0;
let endX = 0;

if (slider) {
  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  slider.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
  }, { passive: true });

  slider.addEventListener('touchend', () => {
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      scrollAmount += diff > 0 ? slideWidth : -slideWidth;

      if (scrollAmount < 0) scrollAmount = 0;
      const maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;
      if (scrollAmount > maxScroll) scrollAmount = maxScroll;

      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }
  });
}


//   if (nextBtn) {
//     nextBtn.addEventListener('click', () => {
//       scrollAmount += slideWidth;
//       slider.style.transform = `translateX(-${scrollAmount}px)`;
//     });
//   }

//   if (prevBtn) {
//     prevBtn.addEventListener('click', () => {
//       scrollAmount -= slideWidth;
//       if (scrollAmount < 0) scrollAmount = 0;
//       slider.style.transform = `translateX(-${scrollAmount}px)`;
//     });
//   }

  // Image modal
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.getElementById('closeModal');

  document.querySelectorAll('.work-slider img').forEach(img => {
    img.addEventListener('click', () => {
      modalImage.src = img.src;
      modal.classList.remove('hidden');
    });
  });

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
});