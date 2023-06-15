const donutCountElement = document.getElementById('donut count');
const autoClickerCountElement = document.getElementById('clickerCount');
const addDonutButton = document.getElementById('addDonutButton');
const purchaseAutoClickerButton = document.getElementById('purchaseAutoClickerButton');
const activateAutoClickersButton = document.getElementById('activateAutoClicker');


let counter = 0;
let AutoClickerCount = 0;
let addClickerCost = 100;
let clickCount = 0;

function updateDonutCount() {
  donutCountElement.textContent = donutCount;
}

function addDonut() {
  donutCount++;
  updateDonutCount();
}

function increaseClickCount() {
  clickCount++;
  updateClickCount();
}

function purchaseAutoClicker() {
  if (clickCount >= addClickerCost && donutCount >= autoClickerCost) {
    clickCount -= autoClickerCost;
    donutCount -= autoClickerCost;
    autoClickerCount++;
    autoClickerCost += Math.round(autoClickerCost * 0.1);
    updateDonutCount();
    updateAutoClickerCount();
  }
}

function activateAutoClickers() {
  const donutsToAdd = autoClickerCount;
  donutCount += donutsToAdd;
  updateDonutCount();
}

addDonutButton.addEventListener("click", function () {
  addDonut();
});

addPurchaseAutoClickerButton.addEventListener("click", function () {
  purchaseAutoClicker();
});

document.addEventListener('click' function() {
  increaseClickCount();

});

updateDonutCount();
updateAutoClickerCount();
updateClickCount();