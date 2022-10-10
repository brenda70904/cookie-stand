'use strict';
let seattle = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  dailyTotal: 0,
  cookieSoldperHrs: [],
  randomCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};
console.log(seattle.randomCust());
