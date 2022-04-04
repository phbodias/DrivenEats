function selectFood(option) {
    const selected = document.querySelector(".selectf");
    if (selected !== null) {
      selected.classList.remove("selectf");
      option.classList.add("selectf");
      return;
    } else {
      option.classList.add("selectf");
    }
    closeOrder();
}
  
function selectDrink(option) {
    drink = option.innerHTML;
    const selected = document.querySelector(".selectd");
    if (selected !== null) {
      selected.classList.remove("selectd");
      option.classList.add("selectd");
    } else {
      option.classList.add("selectd");
    }
    closeOrder();
}
  
function selectDessert(option) {
    dessert = option.innerHTML;
    const selected = document.querySelector(".selectdes");
    if (selected !== null) {
      selected.classList.remove("selectdes");
      option.classList.add("selectdes");
    } else {
      option.classList.add("selectdes");
    }
    closeOrder();
}

function closeOrder(){
    const food = document.querySelector(".selectf");
    const drink = document.querySelector(".selectd");
    const dessert = document.querySelector(".selectdes");
    if (food && drink && dessert){
        const finish = document.querySelector(".button");
        finish.innerHTML = "Fechar pedido";
        finish.classList.add("close");
    }
}

function order(){
    const food = document.querySelector(".selectf");
    const drink = document.querySelector(".selectd");
    const dessert = document.querySelector(".selectdes");
    const foodselected = food.childNodes[3].innerHTML;
    const drinkselected = drink.childNodes[3].innerHTML;
    const dessertselected = dessert.childNodes[3].innerHTML;
    const foodprice = food.childNodes[7].childNodes[3].innerHTML;
    const drinkprice = drink.childNodes[7].childNodes[3].innerHTML;
    const dessertprice = dessert.childNodes[7].childNodes[3].innerHTML;
    const foodformated = parseFloat(foodprice.replace(",", "."));
    const drinkformated = parseFloat(drinkprice.replace(",", "."));
    const dessertformated = parseFloat(dessertprice.replace(",", "."));
    const price = foodformated + drinkformated + dessertformated;
    const name = prompt("Qual o seu nome?");
    const address = prompt("Qual o seu endereço?");
    let text =
    "Olá, gostaria de fazer o pedido: \n- Prato: " +
    foodselected +
    " \n- Bebida: " +
    drinkselected +
    " \n- Sobremesa: " +
    dessertselected +
    " \nTotal: R$ " +
    price.toFixed(2) +
    " \n \n Nome: " +
    name +
    " \n Endereço: " +
    address;
 
    text = window.encodeURIComponent(text);
    if (food && drink && dessert){
      window.location.href = "https://wa.me/5519995983983?text=" + text;
    }
}
  

  