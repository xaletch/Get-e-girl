function openModal(modalClass) {
  document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('active'));

  const modal = document.querySelector(modalClass);
  if (modal) {
      modal.classList.add('active');
  }
}

function closeModalOnOutsideClick() {
  document.addEventListener('click', (event) => {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal && !activeModal.querySelector('.modal__menu').contains(event.target) && !event.target.classList.contains('quick__access-button')) {
          activeModal.classList.remove('active');
      }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.quick__access-button.open-camera').addEventListener('click', () => openModal('.modal-open-camera'));
  document.querySelector('.quick__access-button.donate').addEventListener('click', () => openModal('.modal-donate'));
  document.querySelector('.quick__access-button.query').addEventListener('click', () => openModal('.modal-connect'));

  closeModalOnOutsideClick();
});
