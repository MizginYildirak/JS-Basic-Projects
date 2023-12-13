const searchBox= document.querySelector(".search-box")

function openSearchBox(e) {
    e.classList.toggle("active")
    searchBox.style.display = "block"
}