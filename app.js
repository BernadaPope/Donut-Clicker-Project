const donutCountElement = document.getElementById("donut count");
const autoClickerCountElement = document.getElementById("clickerCount");
const addDonutButton = document.getElementById("addDonutButton");
const PurchaseAutoClickerButton = document.getElementById(

);

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

function purchaseAutoClicker() {
  if (donutCount >= 100) {
    donutCount -= 100;
    autoClickerCount++;
    autoClickerCost += Math.round(autoClickerCost * 0.1);
    updateDonutCount();
    updateAutoClickerCount();
  }
}

addDonutButton.addEventListener("click", function () {
  addDonut();
});

addPurchaseAutoClickerButton.addEventListener("click", function () {
  purchaseAutoClicker();
});

document.addEventListener('click' funtion() {
  increaseClickCount();

});

updateDonutCount();
updateAutoClickerCount();
updateClickCount();