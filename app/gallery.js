const gallery = document.getElementById("media-gallery");
const thumbnailsContainer = document.querySelector(".thumbnails");
const mainImage = document.getElementById("main-img");
const slider = document.getElementById("media-slider");
const modal = document.querySelector(".slider-modal");
const sliderMain = document
  .querySelector(".slider-main")
  .addEventListener("click", (e) => e.stopPropagation());
const sliderThumbnails = document
  .querySelector(".slider-thumbnails")
  .addEventListener("click", (e) => e.stopPropagation());
const closeSliderButton = document.querySelector(".close-slider");

let images = [];

gallery
  .querySelectorAll(".user__media-card:not(.private) .media__card-img img")
  .forEach((img, index) => {
    images.push(img.src);
    const thumbnail = document.createElement("img");
    thumbnail.src = img.src;
    thumbnail.classList.add("media__gallery-img");
    thumbnail.addEventListener("click", () => showImage(index));
    thumbnailsContainer.appendChild(thumbnail);

    img.parentElement.parentElement.addEventListener("click", () => {
      showImage(index);
      modal.classList.add("open");
    });
  });

let currentIndex = 0;
showImage(currentIndex);

function showImage(index) {
  mainImage.src = images[index];
  document.querySelectorAll(".thumbnails img").forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
  currentIndex = index;
}

window.prevImage = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
};

window.nextImage = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
};

modal.addEventListener("click", closeModal);

closeSliderButton.addEventListener("click", (e) => {
  e.stopPropagation();
  closeModal();
});

function closeModal() {
  modal.classList.remove("open");
}
