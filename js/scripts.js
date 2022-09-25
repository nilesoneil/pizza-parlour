function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.addSize = function(pizzaSize) {
  this.size.push(pizzaSize);
};

Pizza.prototype.addToppings = function(toppings) {
  this.toppings += 1;
}

Pizza.prototype.priceOfPizza = function() {
  this.price = 0;
  for(let index = 0; index < this.topping.length; index++) {
    this.price += 1;
  } if(this.size === "small") {
    this.price += 12;
  } else if(this.size === "medium") {
    this.price += 15;
  } else {
    this.price += 18;
  }
  return this.price;
}

//UI Logic

function handleForm(event) {
  const toppings = [];
  const size = document.querySelector("#size").value
  const userSelections = document.querySelectorAll("input:checked");
  const userSelectionsArray = Array.from(userSelections);

  

  userSelectionsArray.forEach(function(element) {
    toppings.push(this.value);
  });

  let newPizza = new Pizza(size, toppings);
  let pizzaPrice = newPizza.priceOfPizza();
  getElementById("#priceResult").textContent = pizzaPrice
}

//window.addEventListener("load", function() {
 // document.querySelector("form#pizzaToppings").addEventListener("submit", handleForm);
//});