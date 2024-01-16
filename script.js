const savings = document.getElementById("saving-details");

function calculateTotalSavings() {
  const numberOfDaysInYear = 366;
  let totalSavings = 0;
  let savingsArray = [];

  const unorderedList = document.createElement("ul");

  for (let currDay = 1; currDay <= numberOfDaysInYear; currDay++) {
    totalSavings += currDay;
    savingsArray.push(
      `Day <strong>${currDay}</strong>, save Ksh<strong>${currDay}</strong> in your account. Total you have saved is Ksh<strong>${totalSavings}.</strong>`
    );
  }

  savingsArray.forEach((saving) => {
    const listItem = document.createElement("li");
    listItem.classList.add("lists");
    listItem.innerHTML = saving;
    unorderedList.appendChild(listItem);
  });

  savings.appendChild(unorderedList);
}

savings.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", savings.innerHTML);
};
const showTask = () => {
  savings.innerHTML = localStorage.getItem("data");
};

showTask();
calculateTotalSavings();
