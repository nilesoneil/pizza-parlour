function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}


Pizza.prototype.priceOfPizza = function() {
  this.price = 0;
  for(let index = 0; index < this.toppings.length; index++) {
    this.price += 1;
  } if(this.size === "small") {
    this.price += 12;
  } else if(this.size === "medium") {
    this.price += 15;
  } else {
    this.price += 18;
  }
  return this.price;
};

Pizza.prototype.orderOut = function() {
  let describeOrder = "Your pizza is a " + this.size + " and costs $" + this.price;
  return describeOrder;
};
//UI Logic

function handleForm(event) {
  event.preventDefault();
  const pizzaSize = document.querySelector("input[name='pizza-size']:checked").value;
  const toppings = document.getElementsByName("ingredient");
  const checkedToppings = [];
  for(let i=0; i < toppings.length; i+=1){
    if (toppings[i].checked === true) {
      checkedToppings.push(toppings[i].value);
    }
  };


  let pizzaOrder = new Pizza(pizzaSize, checkedToppings);
  pizzaOrder.priceOfPizza();
  let orderOutput = pizzaOrder.orderOut();
  console.log(orderOutput);

  document.getElementById("finalPie").innerText = orderOutput;
  document.getElementById("finalPie").removeAttribute("class");
  };
  window.addEventListener("load", function() {
    document.querySelector("form#orderPizza").addEventListener("submit", handleForm);
  })
  
  

