'use strict';

let seattleList = document.getElementById('seattleList');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '01pm', '2pm', '03pm', '04pm', '05pm', '06pm', '07pm']; //length = 14

let seattle = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  dailyTotal: 0,
  cookieSoldperHrs: [],
  randomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  generateCookieSale: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
      this.cookieSoldperHrs.push(cookiesThisHr);
      console.log(cookiesThisHr);
    }
  },
};
seattle.generateCookieSale();

for(let i = 0; i < hours.length; i ++){
  let li = document.createElement('li');
  li.textContent = seattle.cookieSoldperHrs[i] ;
  seattleList.appendChild(li);
}

let tokyoList = document.getElementById('tokyoList');
let tokyo = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  dailyTotal: 0,
  cookieSoldperHrs: [],
  randomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  generateCookieSale: function (){
    for(let i = 0; i <hours.length; i++){
      let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
      this.cookieSoldperHrs.push(cookiesThisHr);
      console.log(cookiesThisHr);
    }
  }
};
tokyo.generateCookieSale();
for(let i = 0; i < hours.length; i ++){
  let li = document.createElement('li');
  li.textContent = tokyo.cookieSoldperHrs[i] ;
  tokyoList.appendChild(li);
}





// let dubai = {
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   dailyTotal: 0,
//   cookieSoldperHrs: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   }
// };
// console.log(dubai.randomCust());

// let paris = {
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   dailyTotal: 0,
//   cookieSoldperHrs: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   }
// };
// console.log(paris.randomCust());

// let lima = {
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   dailyTotal: 0,
//   cookieSoldperHrs: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   }
// };
// console.log(lima.randomCust());
