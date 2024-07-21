const modalAddCard = document.querySelector(".modal__add-card");
const blockAddCard = document
  .querySelector(".modal__add-card .modal__block")
  .addEventListener("click", (e) => e.stopPropagation());
const openAddCard = document.querySelector(".add-services__confirm");
const closeAddCard = document.querySelector(".add-card__close");
const cancelAddCard = document.querySelector(".add-card__cancel");
const confirmAddCard = document.querySelector(".add-card__confirm");

// modal
openAddCard.addEventListener("click", openModal);
modalAddCard.addEventListener("click", closeModal);
closeAddCard.addEventListener("click", closeModal);
cancelAddCard.addEventListener("click", closeModal);
confirmAddCard.addEventListener("click", closeModal);

function closeModal() {
  modalAddCard.classList.remove("open");
}
function openModal() {
  modalAddCard.classList.add("open");
}
