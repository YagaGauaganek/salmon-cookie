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

S
 