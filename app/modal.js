const modal = document.querySelector(".modal");
const menu = document
  .querySelector(".modal__menu")
  .addEventListener("click", (e) => e.stopPropagation());
const buttonOpen = document.querySelector(".button-modal");

const buttonApply = document.querySelector(".modal__button-apply");
const buttonClose = document.querySelector(".modal__button-close");

modal.addEventListener("click", closeMenu);
buttonOpen.addEventListener("click", openMenu);
buttonApply.addEventListener("click", applyChanges);
buttonClose.addEventListener("click", closeMenu);

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
