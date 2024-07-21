const heads = document.querySelectorAll(".accordion__item-head");
const contents = document.querySelectorAll(".accordion__item-content");

heads.forEach((item) => {
  item.addEventListener("click", () => {
    const content = item.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      item.classList.remove("active");
    } else {
      contents.forEach((item) => {
        item.style.maxHeight = null;
      });

      // heads.forEach((item) => item.classList.remove("active"));

      content.style.maxHeight = content.scrollHeight + 30 + "px";
      // item.classList.add("active");
    }
  });
});
