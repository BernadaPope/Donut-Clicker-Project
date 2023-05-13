const button = document.getElementById("clickButton");
const clickCount = document.getElementById("clickCount");

let counter = 0;

button.addEventListener("click", function () {
  counter++;

  clickCount.textContent = "Click count:" + counter;
});
const autoClickerSection = document.getElementById('autoClickerSection');
const autoClickerCount = document.getElementById('autoClickerCount');
const purchaseButton = document.getElementById('purchaseButton');
const autoClickerCost = document.getElementById('autoClickerCost');
const resetButton = document.getElementById('resetButton');

let ClickerCount = 0;
let donutsCount = 15;
let clickerCost = 5;

function updateButtonState() {
  if (donutsCount >= clickerCost) {
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

function resetGame() {
    clickerCount = 0;
    donutsCount = 15;
    clickerCost = 5;
    updateAutoClickerCount();
    updateButtonState();
    updateAutoClickerCost();
}

purchaseButton.addEventListener("click", function () {
  if (donutsCount >= clickerCost) {
    donutsCount -= clickerCost;
    ClickerCount++;
        updateAutoClickerCount();
        updateButtonState();
  }
});

resetButton.addEventListener('click', function () {
    resetGame();
});

updateButtonState();
updateAutoClickerCount();
updateAutoClickerCost();
