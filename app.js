class donutMaker {
  constructor() {
    this.donuts = 0;
    this.autoClickers = 0;
    this.autoClickerCost = 100;
  }

  addDonut() {
    this.donuts++;
  }
  purchaseAutoClicker() {
    if (this.donuts >= this.autoClickerCost) {
      this.donuts -= this.autoClickerCost;
      this.autoClickers++;
      this.autoClickerCost *= 1.1;
    }
  }
  activateAutoClickers() {
    for (let i = 0; i < this.autoClickers; i++) {
      this.addDonut();
    }
  }
    reset() {
      this.donuts = 0;
      this.autoClickers = 0;
      this.autoClickerCost = 100;
    }
  }
  
  class App {
    constructor() {
      this.donutMaker = new donutMaker();
    }

start() {
  document.getElementById("Click").addEventListener("click", this.onButtonClick.bind(this));
  document.getElementById("buy-autoclicker").addEventListener("click", this.onBuyAutoClickerClick.bind(this));
  document.getElementById("reset").add.addEventListener("click", this.onResetClick.bind(this));

}
onButtonClick() {
  this.donutmaker.addDonut();
  document.getElementById("donuts").innerHTML = this.donutMaker.donuts;
}
onBuyAutoClickerClick() {
  this.donutmaker.purchaseAutoClicker();
  document.getElementById("autoclclickers").innerHTML = this.donutMaker.autoClickers;
}
  
onResetClick() {
  this.donutMaker.reset();
  document.getElementById("autoclickers").innerHTML = this.donutMaker.autoClickers;
  }
}
