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
    document.getElementById("click").addEventListener("click",this.onButtonClick.bind(this));
    document.getElementById("buy-autoClicker").addEventListener("click",this.onBuyAutoClickerClick.bind(this));
    document.getElementById("click").addEventListener("click",this.onBuyAutoClickerClick.bind(this));
    document.getElementById("reset").addEventListener("click", this.onResetClick.bind(this));
  }
  onButtonClick() {
    this.donutMaker.addDonut();
    document.getElementById("donuts").innerHTML=this.donutMaker.donuts;
  }
  
  onBuyAutoClickerClick() {
    if (this.donuts >= this.autoClickerCost) {
      this.donuts -= this.autoClickerCost;
      this.autoClickers++;
      this.autoClickerCost*=1.1;
    }
    document.getElementById("autoClickers").innerHTML = this.donutMaker.autoClickers;
  }

  onResetClick() {
    this.donutMaker.reset();
    document.getElementById("autoClickers").innerHTML=this.donutMaker.autoClickers;
  }
}
const app = new App();
app.start();
