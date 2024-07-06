document
  .querySelector(".authorization__form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    const inputs = document.querySelectorAll(".ui-input");
    let isFormValid = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.classList.add("error");
        isFormValid = false;
      } else {
        input.classList.remove("error");
      }
    });

    if (isFormValid) {
      // Тут отправляем данные формы на бэк
      console.log(data);
    }
  });

document.querySelectorAll(".ui-input").forEach((input) => {
  input.addEventListener("input", function () {
    if (this.classList.contains("error")) {
      this.classList.remove("error");
    }
  });
});
