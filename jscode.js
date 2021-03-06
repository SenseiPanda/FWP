//Team Members: Greg Koch, Daniel Lynch, Katherine McLeod, Josh Ramos

// This is the product information for the 16 "items" for sale
var tiger = {name: "Tiger", cost: 2250, info: "This is a full grown tiger and if the correct precautions are not taken it will maul you!"};
var lion = {name: "Lion", cost: 2500, info: "This lion just came from Africa. Note: It will not act like you house cat."};
var baboon = {name: "Baboon", cost: 1950, info: "Baboons are a lot of fun to have around. Great for any party!"};
var peacock = {name: "Peacock", cost: 625, info: "Peacocks look nice but otherwise have no good qualities. They are loud and obnoxious."};
var wallaby = {name: "Wallaby", cost: 500, info: "Closely resembling the kangaroo, wallabies are cute, energetic, and hoppy. Lots of outdoor space required."};
var chimpanzee = {name: "Chimpanzee", cost: 1875, info: "Absolutely adorable, endless possibilities for play, incredibly smart, but occasionally tempermental. Chimps will definitely keep you on your toes."};
var fox = {name: "Fennec Fox", cost: 825, info: "Always wondered what DID the fox say? Now you'll know."};
var lemur = {name: "Ring-Tailed Lemur", cost: 1125, info: "Native to Madagascar, ring-tailed lemurs have long, black-and-white striped tails with remarkable dexterity. Calm, friendly temperament, lemurs make great pets!"};
var meerkat = {name: "Meerkat", cost: 575, info: "Cute and cuddly, you can't own just one! These animals thrive in packs."};
var zebra = {name: "Zebra", cost: 1575, info: "Why ride a horse when you can gallop on the back of a zebra? Warmer climates preferred."};
var llama = {name: "Llama", cost: 1000, info: "The best animals in the world."};
var alpaca = {name: "Alpaca", cost: 1250, info: "Just a fancy llama."};
var vicuna = {name: "Vicuna", cost: 1800, info: "Shipped straight from the mountains of Peru. But are these skinny-looking llamas really worth the extra cost?"};
var camel = {name: "Camel", cost: 2500, info: "Even weirder looking than llamas."};
var cat = {name: "Cat", cost: 10, info: "Please buy our cat. We are sick of her!!!!!"};
var orca = {name: "Orca", cost: 5000, info: "Orcas are big. Must have a swimming pool!!"};



// This will be a variable to store what animal the user is viewing
// so that it can be added to the cart
var activeAnimal = {};

//this variable will hold the cost of all of the animals that have been added to the cart
var totalCart = 0;

/* This function provides the actions after a user clicks purchase
to add to cart */
var purchase = function() {

  //open up a window after they click
  alert("You are one step closer to possessing an exotic animal!!!!");

  // when a new animal is added to the cart, increase the subtotal of the cart
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

/* This function provides the actions after a user clicks a product
to show the details of that product */
var details = function(animal) {

  //shows the product details
  document.getElementById("productDetails").style.display = "block";
  document.getElementById("showName").textContent = "Animal: " + animal.name;
  document.getElementById("showCost").textContent = "Cost: $" + animal.cost;
  document.getElementById("showDetails").textContent = "Info: " + animal.info;

  //set animal being viewed to active for cart management
  activeAnimal = animal;

}

// add checkout functionality to the cart

var checkout = function(){

  /* Upon clicking "checkout", a box pops up that prompts user to
  enter payment information and shipping address. */

  alert("Please enter your shipping and payment info");
  //shows the cart after a click of a product
  document.getElementById("form").style.display = "block";


}

// upon clicking the "buy now" button in the payment box, text pops up to confirm submission

var buyNow = function(){
  alert("Your animals are on their way!");

}
