const img = document.querySelectorAll(".img")
const modal = document.querySelector(".modal")
const mainImg = document.querySelector(".main-img")
const modalImg = document.querySelector(".modal-images")
const imgName = document.querySelector(".img-name")
const rightBtn = document.querySelector(".right-btn")
const leftBtn = document.querySelector(".left-btn")

img.forEach((item) => {
  item.addEventListener("click", (event) => {
    modal.style.opacity = "1"
    modal.style.zIndex = "999"

    showMainImage(event)
    modalImages(event)
  })
})

function showMainImage(event) {
  mainImg.src = event.currentTarget.src
  mainImg.alt = event.currentTarget.alt
  imgName.textContent = event.currentTarget.getAttribute("data-title")
}

let imageIndex = 0

function modalImages(event) {
  const clickedImage = event.currentTarget
  const dataSubject = clickedImage.getAttribute("data-subject")

  const images = Array.from(img)
    .map((item) => {
      if (item.getAttribute("data-subject") == dataSubject) {
        return item.src
      }
    })
    .filter(Boolean)

  rightBtn.addEventListener("click", function () {
    imageIndex++
    if (imageIndex >= images.length) {
      imageIndex = 0
    }
    mainImg.src = images[imageIndex]
  });

  leftBtn.addEventListener("click", function () {
    imageIndex--;
    if (imageIndex < 0) {
      imageIndex = images.length - 1
    }
    mainImg.src = images[imageIndex]
  })

  modalImg.innerHTML = images
    .map((src, index) => {
      return `<img src="${src}" class="modal-img" data-id="${index}"/>`
    })
    .join("")

  const modalImages = document.querySelectorAll(".modal-img")

  modalImages.forEach((item) => {
    item.addEventListener("click", (event) => {
      const dataId = event.currentTarget.getAttribute("data-id")
      if (dataId) {
        mainImg.src = item.src;
        modalImages.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.style.opacity = "0.5"
          } else {
            otherItem.style.opacity = "1"
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
