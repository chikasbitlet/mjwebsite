/* =========================
   SHOW ORDER FORM
   ========================= */
document.addEventListener('DOMContentLoaded', () => {

  const openFormBtn = document.getElementById('openFormBtn');
  const openFormArrow = document.getElementById('openFormText');
  const formSection = document.getElementById('formSection');

  if (openFormBtn) {
    openFormBtn.addEventListener('click', () => {
      formSection.classList.remove('hidden');
      formSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (openFormArrow) {
    openFormArrow.addEventListener('click', () => {
      openFormBtn.click();
    });
  }

  /* =========================
     WORK SHOWCASE SLIDER
     ========================= */
  const slider = document.getElementById('workSlider');
  const nextBtn = document.getElementById('nextWork');
  const prevBtn = document.getElementById('prevWork');

  let scrollAmount = 0;
  const slideWidth = 300; // image width + margin

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
     IMAGE MODAL PREVIEW
     ========================= */
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.getElementById('closeModal');

  if (modal && modalImage) {
    document.querySelectorAll('.work-slider img').forEach(img => {
      img.addEventListener('click', () => {
        modalImage.src = img.src;
        modal.classList.remove('hidden');
      });
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }

});
