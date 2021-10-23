const data = `[{"name":"RTX 3070 8gb","type":"gpu","price":500,"stock":5},{"name":"RTX 3090 24gb","type":"gpu","price":2000,"stock":2}
,{"name":"Ryzen 5 5600x","type":"cpu","price":250,"stock":7},{"name":"Intel core i9 11900k","type":"cpu","price":500,"stock":5},
{"name":"RTX 3070 8gb","type":"gpu","price":500,"stock":5},{"name":"RTX 3090 24gb","type":"gpu","price":2000,"stock":2}
,{"name":"Ryzen 5 5600x","type":"cpu","price":250,"stock":7},{"name":"Intel core i9 11900k","type":"cpu","price":500,"stock":5}]`;
const images = ["images\\3070.jpg","images\\3090.jpg","images\\ryzen5.jpg","images\\i9.jpg"];
const products = JSON.parse(data);

function showProducts() {

    for (let i = 0; i < products.length; i++) {
        const newDiv = document.createElement('div');
        const img = document.createElement("img");
        img.src=images[i];
        img.style.cssText = "width: 200px; height: 200px; margin-top: 20px; margin-left: 20px;";
        const headerText = document.createElement("span");
        headerText.classList.add("productText");
        headerText.innerText = products[i].name; headerText.style.cssText = "font-size: 22px;";
        newDiv.appendChild(headerText);
        newDiv.appendChild(document.createElement("br"));
        newDiv.appendChild(img); newDiv.appendChild(document.createElement("br"));
        const productPrice = document.createElement("p"); productPrice.classList.add("productPrice");productPrice.innerText = ("£"+products[i].price);
        newDiv.appendChild(productPrice);
        const productStock = document.createElement("p");productStock.innerText = "Stock: " + products[i].stock;
        productStock.classList.add("stockText") ;newDiv.appendChild(productStock);
        const buyButton = document.createElement("button"); buyButton.classList.add("buyButton");
        buyButton.innerHTML = "Add to basket";
        newDiv.appendChild(buyButton);
        const parentDiv = document.getElementById("productsArea");
        newDiv.classList.add("item");// adds class item to div
        parentDiv.appendChild(newDiv);
    }
}

showProducts();