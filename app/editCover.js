const cropOverlay = document.getElementById("cropOverlay");
const handles = document.querySelectorAll(".handle");

let isResizing = false;
let isDragging = false;
let startX, startY, startWidth, startHeight, startLeft, startTop;

const constrain = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

const resizeFunctions = {
  "edit__top-left": (dx, dy, containerRect) => ({
    newWidth: constrain(startWidth - dx, 137, containerRect.width - startLeft),
    newHeight: constrain(
      startHeight - dy,
      137,
      containerRect.height - startTop
    ),
    newLeft: constrain(startLeft + dx, 0, containerRect.width - startWidth),
    newTop: constrain(startTop + dy, 0, containerRect.height - startHeight),
  }),
  "edit__top-right": (dx, dy, containerRect) => ({
    newWidth: constrain(startWidth + dx, 137, containerRect.width - startLeft),
    newHeight: constrain(
      startHeight - dy,
      137,
      containerRect.height - startTop
    ),
    newTop: constrain(startTop + dy, 0, containerRect.height - startHeight),
  }),
  "edit__bottom-left": (dx, dy, containerRect) => ({
    newWidth: constrain(startWidth - dx, 137, containerRect.width - startLeft),
    newHeight: constrain(
      startHeight + dy,
      137,
      containerRect.height - startTop
    ),
    newLeft: constrain(startLeft + dx, 0, containerRect.width - startWidth),
  }),
  "edit__bottom-right": (dx, dy, containerRect) => ({
    newWidth: constrain(startWidth + dx, 137, containerRect.width - startLeft),
    newHeight: constrain(
      startHeight + dy,
      137,
      containerRect.height - startTop
    ),
  }),
  "edit__top-center": (_, dy, containerRect) => ({
    newHeight: constrain(
      startHeight - dy,
      137,
      containerRect.height - startTop
    ),
    newTop: constrain(startTop + dy, 0, containerRect.height - startHeight),
  }),
  "edit__bottom-center": (_, dy, containerRect) => ({
    newHeight: constrain(
      startHeight + dy,
      137,
      containerRect.height - startTop
    ),
  }),
};

handles.forEach((handle) => {
  handle.addEventListener("mousedown", (e) => {
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = cropOverlay.offsetWidth;
    startHeight = cropOverlay.offsetHeight;
    startLeft = cropOverlay.offsetLeft;
    startTop = cropOverlay.offsetTop;
    document.body.style.userSelect = "none";

    handle.dataset.resizing = "true";
  });
});

cropOverlay.addEventListener("mousedown", (e) => {
  if (e.target !== cropOverlay) return;
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  startLeft = cropOverlay.offsetLeft;
  startTop = cropOverlay.offsetTop;
  document.body.style.userSelect = "none";
});

document.addEventListener("mousemove", (e) => {
  if (isResizing) {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    const containerRect = cropOverlay.parentNode.getBoundingClientRect();
    const handle = document.querySelector('[data-resizing="true"]');
    const handleClass = handle.classList[1];

    const { newWidth, newHeight, newLeft, newTop } = resizeFunctions[
      handleClass
    ](dx, dy, containerRect);

    cropOverlay.style.width = `${newWidth}px`;
    cropOverlay.style.height = `${newHeight}px`;
    if (newLeft !== undefined) cropOverlay.style.left = `${newLeft}px`;
    if (newTop !== undefined) cropOverlay.style.top = `${newTop}px`;
  }

  if (isDragging) {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    const containerRect = cropOverlay.parentNode.getBoundingClientRect();

    let newLeft = constrain(
      startLeft + dx,
      0,
      containerRect.width - cropOverlay.offsetWidth
    );
    let newTop = constrain(
      startTop + dy,
      0,
      containerRect.height - cropOverlay.offsetHeight
    );

    cropOverlay.style.left = `${newLeft}px`;
    cropOverlay.style.top = `${newTop}px`;
  }
});

document.addEventListener("mouseup", () => {
  isResizing = false;
  isDragging = false;
  document.body.style.userSelect = "auto";
  document
    .querySelectorAll('[data-resizing="true"]')
    .forEach((el) => el.removeAttribute("data-resizing"));
});
