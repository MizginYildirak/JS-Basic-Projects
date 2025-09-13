const balance = document.getElementById("balance");
const amount = document.getElementById("amount");
const btn = document.querySelector(".btn");
const incomeEl = document.getElementById("money-plus");
const expenseEl = document.getElementById("money-minus");
const text = document.getElementById("text");
const list = document.getElementById("list");

let currentBalance = 0;
let totalIncome = 0;
let totalExpense = 0;
let transactions = [];

function updateValues() {
  const amounts = transactions.map((t) => t.amount);

  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  balance.innerHTML = `$${total}`;
  incomeEl.innerHTML = `+$${income}`;
  expenseEl.innerHTML = `-$${expense}`;
}

function renderList() {
  list.innerHTML = "";

  transactions.forEach((t) => {
    const li = document.createElement("li");

    li.classList.add(t.amount > 0 ? "plus" : "minus");
    li.innerHTML = `${t.description}
  <span>${t.amount > 0 ? "+" : "-"}$${Math.abs(t.amount).toFixed(2)}</span>
  <button class="delete-btn" onclick="deleteTransaction(${t.id})">x</button>
  `;
    list.appendChild(li);
  });
}

function deleteTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);
  updateValues();
  renderList();
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const value = parseFloat(amount.value);
  const description = text.value.trim();

  if (description === "") {
    alert("Please enter a description");
    return;
  }

  console.log("list", list);

  if (!isNaN(value) && value !== 0) {
    const transaction = {
      id: Date.now(),
      description: description,
      amount: value,
    };

    transactions.push(transaction);

    updateValues();
    renderList();

    text.value = "";
    amount.value = "";
  }
});
