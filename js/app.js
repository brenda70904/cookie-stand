'use strict';

let hours = ['06am', '07am', '08am', '09am', '10am', '11am', '12pm', '01pm', '02pm', '03pm', '04pm', '05pm', '06pm', '07pm']; //length = 14
// eslint-disable-next-line no-unused-vars

//random customer number
let randomCust = function (cookiestands) {
  return Math.floor(Math.random() * (cookiestands.maxCust - cookiestands.minCust + 1) + cookiestands.minCust);
};
//set up table
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

function CookiesStands(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.dailyTotal = 0;
  this.cookieSoldperHrs = [];
}

// cookie sale per hour
CookiesStands.prototype.generateCookieSale = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookiesThisHr = Math.ceil(randomCust(this) * this.avgSale);
    this.cookieSoldperHrs.push(cookiesThisHr);
  }
};

//add up all cookie sale per hour , add to td tag with total
CookiesStands.prototype.cookiesSaleTotal = function () {
  this.generateCookieSale();
  let tablebody = document.createElement('tbody');
  table.appendChild(tablebody);
  let tablerow = document.createElement('tr');
  tablebody.appendChild(tablerow);
  let tabledata = document.createElement('td');
  tabledata.textContent = this.location;
  tablerow.appendChild(tabledata);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookieSoldperHrs[i];
    tablerow.appendChild(td);
    this.dailyTotal += this.cookieSoldperHrs[i];
  }
  let total = document.createElement('td');
  total.textContent = this.dailyTotal;
  tablerow.appendChild(total);
};
header();
let seattle = new CookiesStands('Seattle', 23, 65, 6.3);
let tokyo = new CookiesStands('Tokyo', 3, 24, 1.2);
let dubai = new CookiesStands('Dubai', 11, 38, 2.7);
let paris = new CookiesStands('Paris', 3, 24, 1.2);
let lima = new CookiesStands('Lima', 3, 24, 1.2);
seattle.cookiesSaleTotal();
tokyo.cookiesSaleTotal();
dubai.cookiesSaleTotal();
paris.cookiesSaleTotal();
lima.cookiesSaleTotal();
