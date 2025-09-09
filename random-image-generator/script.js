const container = document.querySelector(".container");
const imgURL = "https://picsum.photos/";
const rows = 2000;

for (let i = 0; i <= rows; i++) {
  const img = document.createElement("img");
  img.src = `${imgURL}200?random=${Math.floor(Math.random() * 1000)}`;
  container.appendChild(img);
}
