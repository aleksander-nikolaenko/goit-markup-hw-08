
(() => {
  const refs = {
    openModalBtn: document.querySelector('.hero__btn'),
    closeModalBtn: document.querySelector('.close-btn'),
    modal: document.querySelector('.backdrop'),
    modalItem: document.querySelector('.modal'),
    scroll: document.querySelector('body')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', removeModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
     refs.scroll.classList.toggle('no-scroll');
  }
  function removeModal(e) {
    if (e.target === refs.modal) {
      refs.modal.classList.add('is-hidden');
      refs.scroll.classList.toggle('no-scroll');
    }
  }
})();