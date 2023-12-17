const selectBoxBtn = document.querySelector(".select-box")
const searchBox = document.querySelector(".search-box")
const listItem = document.querySelectorAll(".list-item")

function revealSearchBox(e) {
    e.classList.toggle("style-active")
    searchBox.style.display = "flex"
}

function listItemChecked() {
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener("click", function() {
            console.log("hello")
            listItem[i].appendChild("i")
            listItem[i].classList.toggle('fas');
            listItem[i].classList.toggle('fa-check'); 
        })
    }
}

console.log(listItemChecked())