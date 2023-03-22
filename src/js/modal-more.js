(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-video]'),
    closeModalBtn: document.querySelector('[data-modal-close-video]'),
    modal: document.querySelector('[data-modal-video]'),
    bodyNoScroll: document.querySelector('[data-no-scroll]'),
    video: document.querySelector('.youtube'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.modal.addEventListener('click', onBackdropClick);

  function openModal() {
    refs.modal.classList.remove('is-hidden');
    refs.bodyNoScroll.classList.add('no-scroll');
    refs.video.setAttribute(
      'src',
      'https://www.youtube.com/embed/_Zt1EuIEhvw?rel=0&showinfo=0&autoplay=1'
    );
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
    refs.bodyNoScroll.classList.remove('no-scroll');
    refs.video.removeAttribute('src');

    document.addEventListener('keydown', onEscapePress);
  }
  function onBackdropClick(event) {
    if (event.target === event.currentTarget) closeModal();
  }

  function onEscapePress(event) {
    if (event.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', onEscapePress);
    }
  }
})();
