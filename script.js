let expenses = [];

fetch("/data.json").then((response) => {
  return response.json();
}).then((data) => {
  expenses = data;
  updateBars("amount");
})

const updateBars = (key) => {
  const bars = document.querySelectorAll(".chart__bar");
  console.log(bars);

  bars.forEach((bar, index) => {
    const amount = expenses[index][key];
    const percentage = amount * 3;
    const highestAmount = Math.max(...expenses.map(expense => expense.amount));
    bar.style.height = `${percentage}px`;

    if (amount === highestAmount) {
      bar.classList.add("chart__bar--highest");
    }
  });
}
