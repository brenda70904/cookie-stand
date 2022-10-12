'use strict';

let hours = ['06am', '07am', '08am', '09am', '10am', '11am', '12pm', '01pm', '02pm', '03pm', '04pm', '05pm', '06pm', '07pm']; //length = 14
// eslint-disable-next-line no-unused-vars

//random customer number
let randomCust = function (cookiestands) {
  return Math.floor(Math.random() * (cookiestands.maxCust - cookiestands.minCust + 1) + cookiestands.minCust);
};
//
let table = document.querySelector('table');
//this function create table head
function header() {
  let headerRow = document.createElement('tr');
  let tableheader = document.createElement('th');
  tableheader.textContent = 'Store hours';
  table.appendChild(headerRow);
  headerRow.appendChild(tableheader);

  for (let i = 0; i < hours.length; i++) {
    tableheader = document.createElement('th');
    tableheader.textContent = hours[i];
    headerRow.appendChild(tableheader);
  }
  let totalheader = document.createElement('th');
  totalheader.textContent = 'Total';
  headerRow.appendChild(totalheader);
}
header();

function CookiesStands(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.dailyTotal = 0;
  this.cookieSoldperHrs = [];
}
// Seattle
let seattle = new CookiesStands('Seattle', 23, 65, 6.3);

// cookie sale per hour
CookiesStands.prototype.generateCookieSale = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookiesThisHr = Math.ceil(randomCust(this) * this.avgSale);
    this.cookieSoldperHrs.push(cookiesThisHr);
  }
};

//add up all cookie sale per hour , add to li tag with total
CookiesStands.prototype.cookiesSaleTotalSea = function () {
  this.generateCookieSale();
  // create element tbody
  let tablebody = document.createElement('tbody');
  // append to table
  table.appendChild(tablebody);
  //create element tr
  let tablerow = document.createElement('tr');
  //append to tbody
  tablebody.appendChild(tablerow);
  // create table data
  let tabledata = document.createElement('td');
  // tell webpage where to find the txtcontent.
  tabledata.textContent = this.location;
  // append the table data/content to table row.
  tablerow.appendChild(tabledata);
  //loop for create td , add data into table
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookieSoldperHrs[i];
    tablerow.appendChild(td);
    this.dailyTotal += this.cookieSoldperHrs[i];
  }
  let total1 = document.createElement('td');
  total1.textContent = this.dailyTotal;
  tablerow.appendChild(total1);
};

seattle.cookiesSaleTotalSea();



// Seattle
// let seattleList = document.getElementById('seattleList');
// let seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   dailyTotal: 0,
//   cookieSoldperHrs: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   // for cookie sale each hour
//   generateCookieSale: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
//       this.cookieSoldperHrs.push(cookiesThisHr);
//       console.log(cookiesThisHr);
//     }
//   },
//   // for create li tag and put everthing together
//   randomCookieSaleperHr: function () {
//     this.generateCookieSale();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = ` ${hours[i]} : ${this.cookieSoldperHrs[i]} cookies`;
//       seattleList.appendChild(li);
//       this.dailyTotal += this.cookieSoldperHrs[i];
//     }
//     let total1 = document.createElement('li');
//     total1.textContent = `Total : ${this.dailyTotal} cookies`;
//     seattleList.appendChild(total1);
//   }
// };

// seattle.randomCookieSaleperHr();



// //Tokyo
// let tokyoList = document.getElementById('tokyoList');
// let tokyo = {
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   dailyTotal: 0,
//   cookieSoldperHrs: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   generateCookieSale: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
//       this.cookieSoldperHrs.push(cookiesThisHr);
//       console.log(cookiesThisHr);
//     }
//   }
// };
// tokyo.generateCookieSale();
// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = ` ${hours[i]} : ${tokyo.cookieSoldperHrs[i]} cookies`;
//   tokyoList.appendChild(li);
//   tokyo.dailyTotal += tokyo.cookieSoldperHrs[i];
// }
// let total2 = document.createElement('li');
// total2.textContent = `Total : ${tokyo.dailyTotal} cookies`;
// tokyoList.appendChild(total2);




// //Dubai
// let dubaiList = document.getElementById('dubaiList');
// let dubai = {
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   dailyTotal: 0,
//   cookieSoldperHrs: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   generateCookieSale: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
//       this.cookieSoldperHrs.push(cookiesThisHr);
//       console.log(cookiesThisHr);
//     }
//   }
// };
// dubai.generateCookieSale();

// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = ` ${hours[i]} : ${dubai.cookieSoldperHrs[i]} cookies`;
//   dubaiList.appendChild(li);
//   dubai.dailyTotal += dubai.cookieSoldperHrs[i];
// }
// let total3 = document.createElement('li');
// total3.textContent = `Total : ${dubai.dailyTotal} cookies`;
// dubaiList.appendChild(total3);

// let parisList = document.getElementById('parisList');
// let paris = {
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   dailyTotal: 0,
//   cookieSoldperHrs: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   generateCookieSale: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
//       this.cookieSoldperHrs.push(cookiesThisHr);
//       console.log(cookiesThisHr);
//     }
//   }
// };
// paris.generateCookieSale();

// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = ` ${hours[i]} : ${paris.cookieSoldperHrs[i]} cookies`;
//   parisList.appendChild(li);
//   paris.dailyTotal += paris.cookieSoldperHrs[i];
// }
// let total4 = document.createElement('li');
// total4.textContent = `Total : ${paris.dailyTotal} cookies`;
// parisList.appendChild(total4);



// let limaList = document.getElementById('limaList');
// let lima = {
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   dailyTotal: 0,
//   cookieSoldperHrs: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   generateCookieSale: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
//       this.cookieSoldperHrs.push(cookiesThisHr);
//       console.log(cookiesThisHr);
//     }
//   }
// };
// lima.generateCookieSale();
// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = ` ${hours[i]} : ${lima.cookieSoldperHrs[i]} cookies`;
//   limaList.appendChild(li);
//   lima.dailyTotal += lima.cookieSoldperHrs[i];
// }
// let total5 = document.createElement('li');
// total5.textContent = `Total : ${lima.dailyTotal} cookies`;
// limaList.appendChild(total5);
