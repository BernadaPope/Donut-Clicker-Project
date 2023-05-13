const button = document.getElementById("clickButton");
const clickCount = document.getElementById("clickCount");

let counter = 0;

button.addEventListener("click", function () {
  counter++;

  clickCount.textContent = "Click count:" + counter;
});
const autoClickerSection = document.getElementById("autoClickerSection");
const autoClickerCount = document.getElementById("autoClickerCount");
const purchaseButton = document.getElementById("purchaseButton");

let ClickerCount = 0;
let donutsCount = 15;

function updateButtonState() {
  if (donutsCount >= 15) {
    purchaseButton.disabled = false;
    purchaseButton.style.backkgroundColor = "";
  } else {
    purchaseButton.disabled = true;
    purchaseButton.style.backgroundColor = "gray";
  }
}

purchaseButton.addEventListener("click", function () {
  ClickerCount++;

  autoClickerCount.textContent = ClickerCount;
});
