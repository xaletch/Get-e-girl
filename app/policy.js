const buttons = document.querySelectorAll(".show-more-button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    toggleText(this);
  });
});

function toggleText(button) {
  const container = button.previousElementSibling;
  const paragraphs = container.querySelectorAll("p.text-p");
  const isExpanded = container.classList.toggle("expanded");

  paragraphs.forEach((p, index) => {
    if (index >= 2) {
      p.style.display = isExpanded ? "block" : "none";
      setTimeout(() => {
        p.style.opacity = isExpanded ? "1" : "0";
      }, 0);
    }
  });

  button.textContent = isExpanded ? "свернуть" : "еще...";
}
