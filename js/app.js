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
  }// cookieThisHr array
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
let cities = [seattle, tokyo, dubai, paris, lima];
seattle.cookiesSaleTotal();
tokyo.cookiesSaleTotal();
dubai.cookiesSaleTotal();
paris.cookiesSaleTotal();
lima.cookiesSaleTotal();
console.log(seattle.generateCookieSale());

function footer() {
  let footerRow = document.createElement('tr');
  let tablefooter = document.createElement('td');
  tablefooter.textContent = 'Hourly Total';
  table.appendChild(footerRow);
  footerRow.appendChild(tablefooter);

  //loop i = for hour index.
  //loop j = for cities,loop citiies array, target cities's sale in first hour.
  //vgSale * randomCust(cookiestands);
  let hourTotalList = [];
  for (let i = 0; i < hours.length; i++) {
    let sum = 0;
    for (let j = 0; j < cities.length; j++) {
      //add each citiy's sale total
      sum += cities[j].cookieSoldperHrs[i];
    }
    hourTotalList.push(sum);
    // add hourTotal into arry
    let td = document.createElement('td');
    td.textContent = hourTotalList[i];
    footerRow.appendChild(td);
  }
  let td = document.createElement('td');
  let allCitiesSale = 0;
  for (let i = 0; i < cities.length; i++) {
    allCitiesSale += cities[i].dailyTotal;
  }
  td.textContent = allCitiesSale;
  footerRow.appendChild(td);
}
footer();


// form
let form = document.querySelector('form');
// function for adding info to table
function handleSubmit(event) {
  event.preventDefault();
  console.log(event);
  let location = event.target.location.value;
  console.log(`this is ${event.target.location.value}`);
  let minCust = event.target.minCust.value;
  console.log(`this is min: ${event.target.minCust.value}`);
  let maxCust = event.target.maxCust.value;
  console.log(`this is ${event.target.maxCust.value}`);
  let avgSale = event.target.avgSale.value;
  console.log(`this is ${event.target.avgSale.value}`);

  let newLocation = new CookiesStands(location, minCust, maxCust, avgSale);

  console.log(newLocation);
  newLocation.cookiesSaleTotal();
  document.querySelector('table').deleteRow((cities.length)+1);
  cities.push(newLocation);
  footer();

}
form.addEventListener('submit', handleSubmit);


// clean up code 
// function elementMaker(newElement, content, parent){
//   let element = document.createElement(newElement);
//   element.textContent = content;
//   parent.appendChild(element);
// };
