document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("media-gallery");
  const thumbnailsContainer = document.querySelector(".thumbnails");
  const mainImage = document.getElementById("main-img");
  const slider = document.getElementById("media-slider");

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

      // Добавляем обработчик клика на карточку
      img.parentElement.parentElement.addEventListener("click", () => {
        showImage(index);
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
});
