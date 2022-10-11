'use strict';



let hours = ['06am', '07am', '08am', '09am', '10am', '11am', '12pm', '01pm', '02pm', '03pm', '04pm', '05pm', '06pm', '07pm']; //length = 14

function CookiesStands (location, minCust, maxCust, avgSale){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.dailyTotal= 0;
  this.cookieSoldperHrs= [];
}


// Seattle
let seattleList = document.getElementById('seattleList');
let seattle = {
  location: 'Seattle',
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
  randomCookieSaleperHr: function () {
    this.generateCookieSale();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = ` ${hours[i]} : ${this.cookieSoldperHrs[i]} cookies`;
      seattleList.appendChild(li);
      this.dailyTotal += this.cookieSoldperHrs[i];
    }
    let total1 = document.createElement('li');
    total1.textContent = `Total : ${this.dailyTotal} cookies`;
    seattleList.appendChild(total1);
  }
};

seattle.randomCookieSaleperHr();



//Tokyo
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
  generateCookieSale: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
      this.cookieSoldperHrs.push(cookiesThisHr);
      console.log(cookiesThisHr);
    }
  }
};
tokyo.generateCookieSale();
for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  li.textContent = ` ${hours[i]} : ${tokyo.cookieSoldperHrs[i]} cookies`;
  tokyoList.appendChild(li);
  tokyo.dailyTotal += tokyo.cookieSoldperHrs[i];
}
let total2 = document.createElement('li');
total2.textContent = `Total : ${tokyo.dailyTotal} cookies`;
tokyoList.appendChild(total2);


//Dubai
let dubaiList = document.getElementById('dubaiList');
let dubai = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
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
  }
};
dubai.generateCookieSale();

for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  li.textContent = ` ${hours[i]} : ${dubai.cookieSoldperHrs[i]} cookies`;
  dubaiList.appendChild(li);
  dubai.dailyTotal += dubai.cookieSoldperHrs[i];
}
let total3 = document.createElement('li');
total3.textContent = `Total : ${dubai.dailyTotal} cookies`;
dubaiList.appendChild(total3);

let parisList = document.getElementById('parisList');
let paris = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
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
  }
};
paris.generateCookieSale();

for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  li.textContent = ` ${hours[i]} : ${paris.cookieSoldperHrs[i]} cookies`;
  parisList.appendChild(li);
  paris.dailyTotal += paris.cookieSoldperHrs[i];
}
let total4 = document.createElement('li');
total4.textContent = `Total : ${paris.dailyTotal} cookies`;
parisList.appendChild(total4);



let limaList = document.getElementById('limaList');
let lima = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
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
  }
};
lima.generateCookieSale();
for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  li.textContent = ` ${hours[i]} : ${lima.cookieSoldperHrs[i]} cookies`;
  limaList.appendChild(li);
  lima.dailyTotal += lima.cookieSoldperHrs[i];
}
let total5 = document.createElement('li');
total5.textContent = `Total : ${lima.dailyTotal} cookies`;
limaList.appendChild(total5);
