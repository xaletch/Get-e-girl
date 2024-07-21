document.querySelectorAll(".ui-popup").forEach((popup) => {
  const selectValue = popup.querySelector(".popup__select-value");
  const placeholder = popup.querySelector(".popup-placeholder");
  const itemsContainer = popup.querySelector(".popups-items");
  const popupLabel = popup.querySelector(".popup-label");

  if (popupLabel) {
    popupLabel.addEventListener("click", () => {
      const isVisible = itemsContainer.style.display === "block";
      itemsContainer.style.display = isVisible ? "none" : "block";
    });
  }

  popup.querySelectorAll(".popups-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      popupLabel.querySelector(".popup__select-value").textContent =
        e.target.textContent;
      popupLabel.setAttribute("data-selected", true);
      itemsContainer.style.display = "none";
      placeholder.style.display = "none";
    });
  });
});

document.addEventListener("click", (e) => {
  document.querySelectorAll(".popups-items").forEach((container) => {
    if (
      !container.contains(e.target) &&
      !container.previousElementSibling.contains(e.target)
    ) {
      container.style.display = "none";
    }
  });
});
