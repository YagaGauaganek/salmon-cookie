const shopSeattle = {
    minCustomers: 23, 
    maxCustomers: 65,
    avgPerCustomer: 6.3,
}

const shopTokyo = {
    minCustomers: 3, 
    maxCustomers: 24,
    avgPerCustomer: 1.2,
}

const shopDubai = {
    minCustomers: 11, 
    maxCustomers: 38,
    avgPerCustomer: 3.7,
}

const shopParis = {
    minCustomers: 20, 
    maxCustomers: 38,
    avgPerCustomer: 2.3,
}

const shopLima = {
    minCustomers: 2, 
    maxCustomers: 16,
    avgPerCustomer: 4.6,
}

//***

// Hard Numbers Method Example

"use strict"; 
console.log ("salmon cookies");

const container = document.getElementById("container");

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

console.log(hours.length);

const seattle = {
    storeName: "seattle",
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiePerHour: 6.3,
    customersEachHour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    cookiesEachHour: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57],
    totalDailyCookies: 875,
    render: function () {
        const article = document.createElement("article");

        container.appendChild(article);

        const h3 = document.createElement("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);

        const ul = document.createElement("ul");
        article.appendChild(ul);

    for (let i = 0; i < hours.length; i++) {
        const li = document. createElement("li");
        li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
        ul.appendChild(li);
    }
    },
};

seattle.render();

//Method and Prototype

//My kode for sales07 - v1

"use strict"

console.log("This is salmon cookie shop calculation for lab 07")

const container = document.getElementById("container");
const storeTable = document.createElement("store-table");   

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function randomNum (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Shop(storeName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerHour) {
    this.storeName = storeName;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiesPerHour = avgCookiesPerHour;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.totalDailyCookies = 0;
   // this.calcCustomersEachHour();
   // this.calcCookiesEachHour();
    this.render();
}
   Shop. prototype.calcCustomersEachHour = function () {
    // console.log("working");
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(randomNum(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
   };

   Shop.prototype.calcCookiesEachHour = function () {
    //this.calcCustomersEachHour();
    for ( let i = 0; i < hours.length; i++) {
        let oneHour
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;
    }
   };

   Shop.prototype.render = function () {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();

    // create a table row
    const tr = document.createElement("tr");

    // create a table data cell
    const th = document.createElement("th");
    th.textContent = this.storeName;

    // appned the table to the table row
    tr.appendChild(th);

    // loop through cookiesEachHour - create td for each index and append to tr
    for (let i = 0; i < hours.length; i++) {
        const td = document.createElement("td");
        td.textContent = this.cookiesEachHour[i];
        tr.appendChild(td);
       }

    // create a th to display the totals and append to the tr
    const storeTotal = document.createElement("th");
    storeTotal.textContent = this.totalDailyCookies;
    tr.appendChild(storeTotal);

    //append the tr to the table - storeTable
    storeTable.appendChild(tr);
   };

   // test constructor works
   
   const seattle = new Shop("seattle", 23, 65, 6.3);
   const tokyo = new Shop("tokyo", 3, 24, 1.2);
   const dubai = new Shop("dubai", 11, 38, 3.7);
   const paris = new Shop("paris", 20, 38, 2.3);
   const lima  = new Shop("lima", 2, 16, 4.6);
   //hoursTotal[seattle, tokyo, dubai, paris, lima];
   // console.log(seattle)
   // console.log(tokyo)
   // console.log(dubai)
   // console.log(paris)
   // console.log(lima)

 // My kode for sales07 - v2  

 "use strict"

console.log("This is salmon cookie shop calculation for lab 07")

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
const container = document.getElementById("container");
const storeTable = document.createElement("store-table");   

const h2 = document.createElement("h2");
h2.textContent = "Shop"
container.appendChild(h2);

const article = document.createElement("article");
container.appendChild(article);

const table = document.createElement("table");
article.appendChild(table);

const tr = document.createElement("tr");
table.appendChild(tr);
storeOpenHours()

function storeOpenHours(){
    const th = document.createElement("th")
    th.textContent = "Shop Location";
    tr.appendChild(th);

for(let i = 0; i < hours.length; i++) {
    const td = document. createElement("td");
    td.textContent = hours[i];
    tr.appendChild(td);
}
}

function randomNum (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Shop(storeName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerHour) {
    this.storeName = storeName;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiesPerHour = avgCookiesPerHour;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.totalDailyCookies = 0;
   // this.calcCustomersEachHour();
   // this.calcCookiesEachHour();
    this.render();
}
   Shop. prototype.calcCustomersEachHour = function () {
    // console.log("working");
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(randomNum(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
   };

   Shop.prototype.calcCookiesEachHour = function () {
    //this.calcCustomersEachHour();
    for ( let i = 0; i < hours.length; i++) {
        let oneHour
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;
    }
   };

   Shop.prototype.render = function () {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();

    // create a table row
    const tr = document.createElement("tr");

    // create a table data cell
    const th = document.createElement("th");
    th.textContent = this.storeName;

    // appned the table to the table row
    tr.appendChild(th);

    // loop through cookiesEachHour - create td for each index and append to tr
    for (let i = 0; i < hours.length; i++) {
        const td = document.createElement("td");
        td.textContent = this.cookiesEachHour[i];
        tr.appendChild(td);
       }

    // create a th to display the totals and append to the tr
    const storeTotal = document.createElement("th");
    storeTotal.textContent = this.totalDailyCookies;
    tr.appendChild(storeTotal);

    //append the tr to the table - storeTable
    storeTable.appendChild(tr);
   };

   // test constructor works
   
   const seattle = new Shop("seattle", 23, 65, 6.3);
   const tokyo = new Shop("tokyo", 3, 24, 1.2);
   const dubai = new Shop("dubai", 11, 38, 3.7);
   const paris = new Shop("paris", 20, 38, 2.3);
   const lima  = new Shop("lima", 2, 16, 4.6);
   //hoursTotal[seattle, tokyo, dubai, paris, lima];
   // console.log(seattle)
   // console.log(tokyo)
   // console.log(dubai)
   // console.log(paris)
   // console.log(lima)

   //My code for lab 07 v3 
   "use strict"

console.log("Salmon Cookie Shop - code - version 2.1")

const totalCookiesSold = 0
const totalCookiesSoldWorldWide = 0
const openHours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]

const container = document.getElementById("container")

const h2 = document.createElement("h2");
h2.textContent = "Sales"
container.appendChild(h2);

const article = document.createElement("article");
container.appendChild(article);

const table= document.createElement("table");
article.appendChild(table);

const tr = document.createElement("tr")
table.appendChild(tr)
storeOpenHours()

function storeOpenHours(){
    const th = document.createElement("th")
    th.textContent = "Shop Location";
    tr.appendChild(th);

for(let i = 0; i < openHours.length; i++){
    const td = document.createElement("td");
    td.textContent = openHours[i];
    tr.appendChild(td);
    }
}

const td = document.createElement("td");
    td.textContent = "Daily Location Total";
    tr.appendChild(td);

function Shop(shopName, minCust, maxCust, avgCookiePerCust){

    this.shopName =shopName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiePerCust = avgCookiePerCust;
    this.custPerHour = [];
    this.calcCustomersEachHour();
    this.cookiesPerHour = [];
    this.calcCookiesEachHour();
    this.totalDailyCookies = this.calcDailyCookies();

    this.render();
}

Shop.prototype.calcCustomersEachHour = function(){
    for (let i = 0; i < openHours.length; i++){
        this.custPerHour.push(randomCust(this.minCust, this.maxCust));
    }
}

Shop.prototype.calcCookiesEachHour = function(){
    for (let i = 0; i < openHours.length; i++){
        const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiePerCust);
        this.cookiesPerHour.push(oneHour);
        this.totalCookiesSold += oneHour;
    }
}

function randomCust(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)

}

Shop.prototype.calcDailyCookies = function(){
    let totalDailyCookies = 0
    for(let i = 0; i < this.cookiesPerHour.length; i++){
        totalDailyCookies += this.cookiesPerHour[i]
    }
    return totalDailyCookies
}


Shop.prototype.render = function(){
    const containerElement = document.getElementById("container");

    const tr = document.createElement("tr")
    table.appendChild(tr)

    const th = document.createElement("th")
    th.textContent = this.shopName;
    tr.appendChild(th);

    for(let i = 0; i < openHours.length; i++){
        const td = document.createElement("td");
        td.textContent = this.cookiesPerHour[i];
        tr.appendChild(td);
    }
    const td = document.createElement("td");
    td.textContent = this.totalDailyCookies;
    tr.appendChild(td);

}

function hoursTotal(stores){
    const tr = document.createElement("tr")
    table.appendChild(tr)

    const th = document.createElement("th")
    th.textContent = "Totals";
    tr.appendChild(th);

    for(let i = 0; i < openHours.length; i++){
        const td = document.createElement("td");
        let totalHourCookiesSold = 0
        for(let j = 0; j < stores.length; j++){
            totalHourCookiesSold += stores[j].cookiesPerHour[i]
        }
        td.textContent = totalHourCookiesSold
        tr.appendChild(td);
    }
    let totalGlobalSales = 0

    const td = document.createElement("td");
    for(let i = 0; i < stores.length; i++){
        totalGlobalSales += stores[i].totalDailyCookies
    }
    td.textContent = totalGlobalSales
    tr.appendChild(td);
}

const seattle = new Shop("seattle", 23, 65, 6.3,)
const tokyo = new Shop("tokyo", 3, 24, 1.2,)
const dubai = new Shop("dubai", 11, 38, 3.7)
const paris = new Shop("paris", 20,38, 2.3,)
const lima = new Shop("lima", 2, 16, 4.6,)
hoursTotal([seattle, tokyo, dubai, paris, lima])

//My code for lab finel lab week 2/201 with not working newShop
