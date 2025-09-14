const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value; 

movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateTotal();
});

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    seat.classList.toggle("selected");
    updateTotal();
  });
});

function updateTotal() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}
