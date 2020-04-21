
//This is all the product information
var tiger = {name: "Tiger", cost: 12, info: "This is a full grown tiger and if the correct precautions are not taken it will maul you!"};
var lion = {name: "Lion", cost: 50, info: "This lion just came from Africa. Note: It will not act like you house cat."};
var baboon = {name: "Baboon", cost: 45, info: "Baboons are a lot of fun to have around, great for any party."};
var peacock = {name: "Peacock", cost: 3500, info: "Peacock's look nice but otherwise have no good qualities, they are loud and obnoxious."};


//This will be a variable to store what animal the user is viewing
//so that it can be added to the cart
var activeAnimal = {};

//this variable will hold the total cart value
var totalCart = 0;

//This function provides the actions after a user clicks purchase
//to add to cart
var purchase = function() {

  //open up a window after they click
  alert("Congratulations: This item has been added to your cart!");

  //shows the cart after a click of a product
  document.getElementById("aside").style.display = "block";

  //This will add the animal that they puchased to the cart
  //document.getElementById("cart").textContent += activeAnimal.name + '\r\n';
  document.getElementById("cart").innerHTML += activeAnimal.name;
  document.getElementById("cart").innerHTML += "<br/>";
  document.getElementById("cart").innerHTML += "----------$" + activeAnimal.cost;
  document.getElementById("cart").innerHTML += "<br/>";

  //Puts the cart total in the cart
  document.getElementById("subtotal").innerHTML = "Cart subtotal  $" + totalCart;

}

//This function provides the actions after a user clicks a product
//to show the details of that product
var details = function(animal) {

  //shows the product details
  document.getElementById("productDetails").style.display = "block";
  document.getElementById("showName").textContent = "Animal: " + animal.name;
  document.getElementById("showCost").textContent = "Cost: $" + animal.cost;
  document.getElementById("showDetails").textContent = "Info: " + animal.info;

  //set animal being viewed to active for cart management
  activeAnimal = animal;

  //increase the total value of the cart
  totalCart += animal.cost;

}
