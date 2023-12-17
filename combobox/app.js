const selectBoxBtn = document.querySelector(".select-box")
const searchBox = document.querySelector(".search-box")

function revealSearchBox(e) {
    e.classList.toggle("style-active")
    searchBox.style.display = "flex"
}