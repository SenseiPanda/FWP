
// This is the product information for the four "items" for sale
var tiger = {name: "Tiger", cost: 12, info: "This is a full grown tiger and if the correct precautions are not taken it will maul you!"};
var lion = {name: "Lion", cost: 50, info: "This lion just came from Africa. Note: It will not act like you house cat."};
var baboon = {name: "Baboon", cost: 45, info: "Baboons are a lot of fun to have around. Great for any party!"};
var peacock = {name: "Peacock", cost: 3500, info: "Peacocks look nice but otherwise have no good qualities. They are loud and obnoxious."};


// This will be a variable to store what animal the user is viewing
// so that it can be added to the cart
var activeAnimal = {};

//this variable will hold the total cart value
var totalCart = 0;

//This function provides the actions after a user clicks purchase
//to add to cart
var purchase = function() {

  //open up a window after they click
  alert("You are one step closer to possessing an exotic animal!!!!");

  //increase the total value of the cart
  totalCart += activeAnimal.cost;

  //shows the cart after a click of a product
  document.getElementById("aside").style.display = "block";

  //This will add the animal that they chose to purchase to the cart
  document.getElementById("cart").innerHTML += activeAnimal.name;
  document.getElementById("cart").innerHTML += "<br/>";
  document.getElementById("cart").innerHTML += "----------$" + activeAnimal.cost;
  document.getElementById("cart").innerHTML += "<br/>";

  // Displays the total cost of animals added to the cart in the cart
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

}

var checkout = function(){

  alert("Please enter your shipping and payment info");
  //shows the cart after a click of a product
  document.getElementById("form").style.display = "block";


}

var buyNow = function(){
  alert("Your animals are on their way!");
  //add image of Joe Exotic giving thumbs up?
  //or bring to a new page
}