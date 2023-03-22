(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-now-modal-open-tabl]'),
    openMobileModalBtn: document.querySelector(
      '[data-buy-now-modal-open-mobile]'
    ),
    closeModalBtn: document.querySelector('[data-modal-close]'),

    modal: document.querySelector('[data-modal-buy-now]'),
    bodyNoScroll: document.querySelector('[data-no-scroll]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openMobileModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', onBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.bodyNoScroll.classList.toggle('no-scroll');
    document.addEventListener('keydown', onEscapePress);
  }

  function onBackdropClick(event) {
    if (event.target === event.currentTarget) toggleModal();
  }

  function onEscapePress(event) {
    if (event.key === 'Escape') {
      toggleModal();
      document.removeEventListener('keydown', onEscapePress);
    }
  }
})();
