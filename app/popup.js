const popupLabel = document.querySelector(".popup-label");
const popupsItems = document.querySelector(".popups-items");
const popupSelectValue = document.querySelector(".popup__select-value");
const popupPlaceholder = document.querySelector(".popup-placeholder");
const popupItems = document.querySelectorAll(".popups-item");
const icon = document.querySelector(".popup-icon");

popupLabel.addEventListener("click", function () {
  popupsItems.classList.toggle("open");
  icon.classList.add("active");
});

popupItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedLanguage = item.textContent;

    popupSelectValue.textContent = selectedLanguage;

    popupPlaceholder.style.display = "none";
    popupsItems.classList.remove("open");
    icon.classList.remove("active");
  });
});

window.addEventListener("click", function (event) {
  if (!event.target.closest(".ui-popup")) {
    popupsItems.classList.remove("open");
    icon.classList.remove("active");
  }
});
