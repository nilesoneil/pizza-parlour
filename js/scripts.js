function Order() {
  this.pie = {};
}

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

