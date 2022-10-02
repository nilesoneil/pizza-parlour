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
  event.preventDefault();
  const pizzaSize = document.querySelector("input[name='pizza-size']:checked").value;
  const toppings = document.getElementsByName("toppings");
  const checkedToppings = [];
  for(let i=0; i < toppings.length; i+=1){
    if (toppings[i].checked === true) {
      checkedToppings.push(toppings[i].value);
    }
  };

//window.addEventListener("load", function() {
 // document.querySelector("form#pizzaToppings").addEventListener("submit", handleForm);
//});