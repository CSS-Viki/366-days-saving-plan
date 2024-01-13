const savings = document.getElementById("saving-details");

function calculateTotalSavings() {
  const numberOfDaysInYear = 366;
  let totalSavings = 0;
  let savingsArray = [];


  const unorderedList = document.createElement("ul");
  unorderedList.classList.add("list-items");

  for (let currDay = 1; currDay <= numberOfDaysInYear; currDay++) {
    totalSavings += currDay;
    savingsArray.push(`Day <strong>${currDay}</strong>, you should save Ksh<strong>${currDay}</strong>. Total you have saved is Ksh<strong>${totalSavings}</strong>`);
  }

  savingsArray.forEach(saving => {
    const listItem = document.createElement("li");
    listItem.classList.add("lists");
    listItem.innerHTML = saving;
    unorderedList.appendChild(listItem);
  });

  savings.appendChild(unorderedList);
}

calculateTotalSavings();
