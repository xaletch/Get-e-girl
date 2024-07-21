const modalAddServices = document.querySelector(".modal__add-services");
const modalBlock = document
  .querySelector(".modal__add-services .modal__block")
  .addEventListener("click", (e) => e.stopPropagation());
const openButton = document.querySelector(".user-add__services");
const closeButton = document.querySelector(".add-services__close");
const cancelButton = document.querySelector(".add-services__cancel");
const confirmButton = document.querySelector(".add-services__confirm");

// modal
openButton.addEventListener("click", openModal);
modalAddServices.addEventListener("click", closeModal);
closeButton.addEventListener("click", closeModal);
cancelButton.addEventListener("click", closeModal);
confirmButton.addEventListener("click", closeModal);

function closeModal() {
  modalAddServices.classList.remove("open");
}
function openModal() {
  modalAddServices.classList.add("open");
}
