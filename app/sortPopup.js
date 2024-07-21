const sortPopups = document.querySelectorAll(".ui-sort__popup");

sortPopups.forEach((popup) => {
  const popupBlock = popup.querySelector(".sort__popup-block");
  const sortValue = popup.querySelector(".select__sort-value");
  const popupValues = popup.querySelector(".sort__popup-values");
  const valueItems = popup.querySelectorAll(".popup__valuer-list__item");

  popupBlock.addEventListener("click", () => {
    popupValues.style.display =
      popupValues.style.display === "block" ? "none" : "block";
  });

  valueItems.forEach((item) => {
    item.addEventListener("click", () => {
      valueItems.forEach((el) => el.classList.remove("select"));

      item.classList.add("select");

      sortValue.textContent = item.textContent;

      popupValues.style.display = "none";
    });
  });

  document.addEventListener("click", (event) => {
    if (!popup.contains(event.target)) {
      popupValues.style.display = "none";
    }
  });
});
