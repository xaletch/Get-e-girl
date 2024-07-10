const inputCode = document.querySelector(".input-code");
const buttonCopy = document.querySelector(".text-copy");

inputCode.addEventListener("input", formatInput);

function formatInput() {
  const value = inputCode.value.replace(/\D/g, "");
  const formatValue = value.match(/.{1,4}/g)?.join("-") ?? "";
  inputCode.value = formatValue.substring(0, 19);
}

function copyText(inputId) {
  const input = document.querySelector(`.${inputId}`);
  navigator.clipboard.writeText(input.value);
}
