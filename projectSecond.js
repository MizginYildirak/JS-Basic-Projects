const img = document.querySelectorAll(".img");
const modal = document.querySelector(".modal");
const mainImg = document.querySelector(".main-img");
const modalImg = document.querySelector(".modal-images");
const imgName = document.querySelector(".img-name");

img.forEach((item) => {
  item.addEventListener("click", (event) => {
    modal.style.opacity = "1";
    modal.style.zIndex = "999";

    showMainImage(event);
    modalImages(event);
  });
});

function showMainImage(event) {
  mainImg.src = event.currentTarget.src;
  mainImg.alt = event.currentTarget.alt;
  imgName.textContent = event.currentTarget.getAttribute('data-title');
}

function modalImages(event) {
  const clickedImage = event.currentTarget;
  const dataSubject = clickedImage.getAttribute("data-subject");

  const images = Array.from(img).map((item) => {
    const itemSubject = item.getAttribute("data-subject");
    if (dataSubject === itemSubject) {
      return `<img src="${item.src}" data-id="${item.dataset.id}" class="modal-img"/>`;
    }
  });

  modalImg.innerHTML = images.join('');

  const modalImages = document.querySelectorAll('.modal-img');
 
  
  modalImages.forEach((item) => {
    item.addEventListener("click", (event) => {
      const dataId = event.currentTarget.getAttribute("data-id");
      if (dataId) {
        mainImg.src = item.src;
        modalImages.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.style.opacity = "0.5";
          } else {
            otherItem.style.opacity = "1";
          }
        })
      }
    })
  })
}
  
function closeBtn() {
  modal.style.opacity = "0"
  modal.style.zIndex = "-4"
}
