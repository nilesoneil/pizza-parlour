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

//UI Logic

function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll("input:checked");
  const userSelectionsArray = Array.from(userSelections);

  

  userSelectionsArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    document.body.append(paragraph);
  });
}

window.addEventListener("load", function() {
  document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);
});