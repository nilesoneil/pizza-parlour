function Order() {
  this.pie = {};
}

function Pizza(size, toppings) {
  this.size = {};
  this.toppings = {};
}

Pizza.prototype.checkOut = function() {
  return this.size + " " + this.toppings;
};