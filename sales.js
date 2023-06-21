"use strict"

console.log("This is salmon cookie shop calculation");

const container = document.getElementById("container");

const hour = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

console.log(hour.length);
const seattle = {
    storeName: "seattle",
    minCustomersPerHour: 23, 
    maxCustomersPerHour: 65,
    avgCookiesPerHour: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailycookies: 0,
    calcCustomersEachHour: function () {
        for(let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(randomNum(this.minCustomersPerHour, this.maxCustomersPerHour));
        }
        // console.log(this.customersEachHour);
    }, 

    calcCookiesEachHour: function () { 
        for (let i = 0 ; i , hours.length; i++) {
            const oneHour = Math.ceil(this.customersEachHour [i] * this.avgCookiesPerHour); 
            this.cookiesEachHour.push(oneHour);
            this.totalDailycookies += oneHour;
        }
    },

    render: function() {
        this.calcCustomersEachHour();
        this.calcCookiesEachHour

        const article = document.createElement("article");
        container.appendChild(article);

        const h3 = document.createElement ("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);

        const ul = document.createElement("ul");
        article.appendChild("ul");

        for (let i = 0; i < hours.length; i++){
            const li = document.createElement("li");
            li.textContent = `${hours[i]}: ${this.cookieEachHour[i]} cookies`;
            ul.appendChild(li);
        }
    },
};

console.log(hour.length);
const tokyo = {
    storeName: "tokyo",
    minCustomersPerHour: 3, 
    maxCustomersPerHour: 24,
    avgCookiesPerHour: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailycookies: 0,
    calcCustomersEachHour: function () {
        for(let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(randomNum(this.minCustomersPerHour, this.maxCustomersPerHour));
        }
        // console.log(this.customersEachHour);
    }, 

    calcCookiesEachHour: function () { 
        for (let i = 0 ; i , hours.length; i++) {
            const oneHour = Math.ceil(this.customersEachHour [i] * this.avgCookiesPerHour); 
            this.cookiesEachHour.push(oneHour);
            this.totalDailycookies += oneHour;
        }
    },

    render: function() {
        this.calcCustomersEachHour();
        this.calcCookiesEachHour

        const article = document.createElement("article");
        container.appendChild(article);

        const h3 = document.createElement ("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);

        const ul = document.createElement("ul");
        article.appendChild("ul");

        for (let i = 0; i < hours.length; i++){
            const li = document.createElement("li");
            li.textContent = `${hours[i]}: ${this.cookieEachHour[i]} cookies`;
            ul.appendChild(li);
        }
    },
};

console.log(hour.length);
const dubai = {
    storeName: "dubai",
    minCustomersPerHour: 11, 
    maxCustomersPerHour: 38,
    avgCookiesPerHour: 3.7,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailycookies: 0,
    calcCustomersEachHour: function () {
        for(let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(randomNum(this.minCustomersPerHour, this.maxCustomersPerHour));
        }
        // console.log(this.customersEachHour);
    }, 

    calcCookiesEachHour: function () { 
        for (let i = 0 ; i , hours.length; i++) {
            const oneHour = Math.ceil(this.customersEachHour [i] * this.avgCookiesPerHour); 
            this.cookiesEachHour.push(oneHour);
            this.totalDailycookies += oneHour;
        }
    },

    render: function() {
        this.calcCustomersEachHour();
        this.calcCookiesEachHour

        const article = document.createElement("article");
        container.appendChild(article);

        const h3 = document.createElement ("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);

        const ul = document.createElement("ul");
        article.appendChild("ul");

        for (let i = 0; i < hours.length; i++){
            const li = document.createElement("li");
            li.textContent = `${hours[i]}: ${this.cookieEachHour[i]} cookies`;
            ul.appendChild(li);
        }
    },
};

console.log(hour.length);
const paris = {
    storeName: "paris",
    minCustomersPerHour: 20, 
    maxCustomersPerHour: 38,
    avgCookiesPerHour: 2.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailycookies: 0,
    calcCustomersEachHour: function () {
        for(let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(randomNum(this.minCustomersPerHour, this.maxCustomersPerHour));
        }
        // console.log(this.customersEachHour);
    }, 

    calcCookiesEachHour: function () { 
        for (let i = 0 ; i , hours.length; i++) {
            const oneHour = Math.ceil(this.customersEachHour [i] * this.avgCookiesPerHour); 
            this.cookiesEachHour.push(oneHour);
            this.totalDailycookies += oneHour;
        }
    },

    render: function() {
        this.calcCustomersEachHour();
        this.calcCookiesEachHour

        const article = document.createElement("article");
        container.appendChild(article);

        const h3 = document.createElement ("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);

        const ul = document.createElement("ul");
        article.appendChild("ul");

        for (let i = 0; i < hours.length; i++){
            const li = document.createElement("li");
            li.textContent = `${hours[i]}: ${this.cookieEachHour[i]} cookies`;
            ul.appendChild(li);
        }
    },
};

console.log(hour.length);
const lima = {
    storeName: "lima",
    minCustomersPerHour: 2, 
    maxCustomersPerHour: 16,
    avgCookiesPerHour: 4.6,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailycookies: 0,
    calcCustomersEachHour: function () {
        for(let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(randomNum(this.minCustomersPerHour, this.maxCustomersPerHour));
        }
        // console.log(this.customersEachHour);
    }, 

    calcCookiesEachHour: function () { 
        for (let i = 0 ; i , hours.length; i++) {
            const oneHour = Math.ceil(this.customersEachHour [i] * this.avgCookiesPerHour); 
            this.cookiesEachHour.push(oneHour);
            this.totalDailycookies += oneHour;
        }
    },

    render: function() {
        this.calcCustomersEachHour();
        this.calcCookiesEachHour

        const article = document.createElement("article");
        container.appendChild(article);

        const h3 = document.createElement ("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);

        const ul = document.createElement("ul");
        article.appendChild("ul");

        for (let i = 0; i < hours.length; i++){
            const li = document.createElement("li");
            li.textContent = `${hours[i]}: ${this.cookieEachHour[i]} cookies`;
            ul.appendChild(li);
        }
    },
};

//console.log(seattle.customersEachHour.length);
//console.log(seattle.cookiesEachHour.length);

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();