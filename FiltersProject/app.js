const companyBtn = document.querySelectorAll(".company-btn")
const productsContainer = document.querySelector(".products-container")
const searchInput = document.querySelector(".search-input")
const product = document.querySelectorAll(".product")
const productName = document.querySelectorAll(".product-name")

for (let i = 0; i < companyBtn.length; i++) {
  companyBtn[i].addEventListener("click", (event) => {
    const dataId = event.currentTarget.getAttribute("data-id")

    switch (dataId) {
      case "all":
        Array.from(product).forEach((item) => {
          item.style.display = "block"
        })
        break
      default:
        Array.from(product).forEach((item) => {
          if (item.getAttribute("data-id") === dataId) {
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        })
        break
    }
  })
}

searchInput.onkeyup = () => {
  let search = searchInput.value.toLowerCase()

  Array.from(productName).forEach((item) => {
    let el = item.innerHTML.toLowerCase()
    let productItem = item.closest(".product")

    if (el.indexOf(search) === -1) {
      productItem.style.display = "none"
    } else if (el.indexOf(search) !== -1 || searchInput.value === "") {
      productItem.style.display = "block"
    }
  })
}
