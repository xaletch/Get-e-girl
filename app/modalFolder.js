const modal = document.querySelector(".modal__big-folder");
const menu = document
  .querySelector(".modal__block")
  .addEventListener("click", (e) => e.stopPropagation());
const close = document.querySelector(".modal__btn-cancel");
const buttonOpen = document.querySelector(".add-content");
const buttonClose = document.querySelector(".modal-close");

modal.addEventListener("click", closeMenu);
buttonOpen.addEventListener("click", openMenu);
buttonClose.addEventListener("click", closeMenu);
close.addEventListener("click", closeMenu);

function applyChanges() {
  openMenu();
  closeMenu();
}

function openMenu() {
  modal.classList.add("active");
}

function closeMenu() {
  modal.classList.remove("active");
}
