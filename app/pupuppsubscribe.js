document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".prices-apply.select-services");
  const buttonContent = button.querySelector(".button-content");
  const buttonText = buttonContent.querySelector("p");
  const buttonCount = buttonContent.querySelector("span");
  const popup = document.querySelector(".popups-items");
  const checkboxes = popup.querySelectorAll(".checkbox-input");

  // Функция для обновления текста и количества
  const updateButtonContent = () => {
    const selectedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    if (selectedCount > 0) {
      buttonText.textContent = "Выбрано:";
      buttonText.classList.add("active");
      buttonCount.textContent = selectedCount;
      buttonCount.style.display = "flex";
    } else {
      buttonText.textContent = "выбрать услугу";
      buttonText.classList.remove("active");
      buttonCount.style.display = "none";
    }
  };

  // Открытие/закрытие попапа
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    popup.classList.toggle("active");
  });

  // Закрытие попапа при клике вне его
  document.addEventListener("click", (event) => {
    if (!popup.contains(event.target) && !button.contains(event.target)) {
      popup.classList.remove("active");
    }
  });

  // Отслеживание изменений чекбоксов
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", updateButtonContent);
  });
});
