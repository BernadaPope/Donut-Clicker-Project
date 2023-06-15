const button = document.getElementById("donut count");
const clickCount = document.getElementById("addDonutButton");

let counter = 0;

function updateDonutCount() {
  donutCountElement.textContent = donutCount;

}

function addDonut() {
  donutCount++
  updateDonutCount();
}

addDonutButton.addEventListener('click', function() {
  addDonut();
});

updateDonutCount();