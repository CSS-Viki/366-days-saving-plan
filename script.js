const savings = document.getElementById("saving-details");
let savingsArray = [];

function calculateTotalSavings() {
  const numberOfDaysInYear = 366;
  let totalSavings = 0;

  const unorderedList = document.createElement("ul");

  for (let currDay = 1; currDay <= numberOfDaysInYear; currDay++) {
    totalSavings += currDay;
    savingsArray.push({
      day: currDay,
      amount: currDay,
      total: totalSavings,
    });
  }

  savingsArray.forEach((saving) => {
    let listItem = document.createElement("li");
    listItem.classList.add("lists");
    listItem.innerHTML = `Day <strong>${saving.day}</strong>, save Ksh<strong>${saving.amount}</strong> in your account. Total you have saved is Ksh<strong>${saving.total}.</strong>`;
    unorderedList.appendChild(listItem);
  });

  savings.appendChild(unorderedList);
}

savings.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
});

calculateTotalSavings();
