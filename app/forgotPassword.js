import { validateEmail } from "./validateEmail.js";

document
  .querySelector(".forgot-password__form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const emailInput = form.querySelector('input[name="email"]');
    const emailValue = emailInput.value.trim();

    let isFormValid = true;

    if (emailValue === "" || !validateEmail(emailValue)) {
      emailInput.classList.add("error");
      isFormValid = false;
    } else {
      emailInput.classList.remove("error");
    }

    if (isFormValid) {
      // Отправка данных формы на бэк
      console.log(data);

      window.location.href = "forgotPassStageTwo.html";
    }
  });

document.querySelectorAll(".input-required").forEach((input) => {
  input.addEventListener("input", function () {
    if (this.classList.contains("error")) {
      this.classList.remove("error");
    }
  });
});
