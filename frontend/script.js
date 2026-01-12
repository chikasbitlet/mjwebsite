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

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      scrollAmount += slideWidth;
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      scrollAmount -= slideWidth;
      if (scrollAmount < 0) scrollAmount = 0;
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    });
  }

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