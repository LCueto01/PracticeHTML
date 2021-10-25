const data = `[{"name":"RTX 3070 8gb","category":"components","type":"gpu","price":500,"stock":5},
{"name":"RTX 3090 24gb", "category":"components","type":"gpu","price":2000,"stock":2}
,{"name":"Ryzen 5 5600x", "category":"components","type":"cpu","price":250,"stock":7},
{"name":"Intel core i9 11900k", "category":"components", "type":"cpu","price":500,"stock":5},
{"name":"MSI B550 motherboard", "category":"components", "type":"mobo","price":100,"stock":3},
{"name":"Asus H560 motherboard", "category":"components", "type":"mobo","price":110,"stock":5},
{"name":"EVGA 650w psu", "category":"components", "type":"psu","price":90,"stock":3},
{"name":"Corsair 850w psu", "category":"components", "type":"psu","price":120,"stock":6},
{"name":"Corsair DDR4 3200mhz ram", "category":"components", "type":"ram","price":99,"stock":8},
{"name":"GSkill DDR4 4200mhz ram", "category":"components", "type":"ram","price":150,"stock":3},
{"name":"WD Blue 1tb Hdd", "category":"components", "type":"hdd","price":60,"stock":3},
{"name":"WD Blue sn550 1tb ssd", "category":"components", "type":"hdd","price":85,"stock":3},
{"name":"AOC242GU ", "category":"components", "type":"monitor","price":185,"stock":3}]`;
const products = JSON.parse(data);

function showProducts(number) {
    let input = 0;
    if(Number.isInteger(number)){
        input = number;
    }
    for (let i = 0; i < 12; i++) {
        
        const newDiv = document.createElement('div');
        const img = document.createElement("img");
        let imgPath = "";
        if(products[i+input]!== undefined){
            switch(products[i+input].type){ 
                case "gpu":
                    imgPath = "images\\gpu.jpg";
                    break;
                case "cpu":
                    imgPath = "images\\cpu.jpg";
                    break;
                 case "psu":
                    imgPath = "images\\psu.jpg";
                    break;
                 case "ram":
                    imgPath = "images\\ram.jpg";
                    break;
                 case "mobo":
                    imgPath = "images\\motherboard.jpg";
                    break;
                 case "hdd":
                    imgPath = "images\\harddrive.jpg";
                    break;
                 case "case":
                    imgPath = "images\\case.jpg";
                    break;
                case "monitor":
                    imgPath = "images\\monitor.jpg";
                    break;
            }
            img.src= imgPath;
            img.style.cssText = "width: 200px; height: 200px; margin-top: 20px; margin-left: 20px;";
            const headerText = document.createElement("span");
            headerText.innerText = products[i+input].name; headerText.style.cssText = "font-size: 22px;";
            newDiv.appendChild(headerText);
            newDiv.appendChild(document.createElement("br"));
            newDiv.appendChild(img); newDiv.appendChild(document.createElement("br"));
            const productPrice = document.createElement("p"); productPrice.classList.add("productPrice");productPrice.innerText = ("£"+products[i].price);
            newDiv.appendChild(productPrice);
            const productStock = document.createElement("span");productStock.innerText = "Stock: " + products[i+input].stock;
            productStock.style.cssText="font-size: 16px; color:green; margin-top: 5px;"; newDiv.appendChild(productStock);
            const buyButton = document.createElement("button"); buyButton.classList.add("buyButton");
            buyButton.innerHTML = "Add to basket";
            newDiv.appendChild(buyButton);
            const parentDiv = document.getElementById("productsArea"); const referenceNode = document.getElementById("pageButtonsArea");
            newDiv.classList.add("item");// adds class item to div
            parentDiv.appendChild(newDiv);
        }
       
    }
}

function resetProducts(){
    const parentDiv = document.getElementById("productsArea");
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.lastChild);

      }
}

