const button = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');

let counter = 0;

button.addEventListener('click', function () {
    counter++;

    clickCount.textContent = 'Click count:' + counter;
    });