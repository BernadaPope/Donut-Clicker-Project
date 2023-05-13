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
const autoClickerCost = document.getElementById("autoClickerCost");

let ClickerCount = 0;
let donutsCount = 15;
let clickerCost = 20;

function updateButtonState() {
  if (donutsCount >= 15) {
    purchaseButton.disabled = false;
    purchaseButton.style.backgroundColor = '';
  } else {
    purchaseButton.disabled = true;
    purchaseButton.style.backgroundColor = 'gray';
  }
}

function updateButtonState() {
    if (donutsCount >= clickerCost) {
        purchaseButton.disabled = false;
        purchaseButton.style.backgroundColor = '';
    } else {
        purchaseButton.disabled = true;
        purchaseButton.style.backgroundColor = 'gray';
    }
}

function updateAutoClickerCount()
autoClickerCount.textContent = ClickerCount;

function updateAutoClickerCost() {
    autoClickerCost.textContent = clickerCost;
}

purchaseButton.addEventListener("click", function () {
  if (donutsCount >= 15) {
    donutsCount -= 10;
    ClickerCount++;
        updateAutoClickerCount();
        updateButtonState();
  }
});

updateButtonState();
updateAutoClickerCount();
updateAutoClickerCost();
