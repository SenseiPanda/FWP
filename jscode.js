
//This is all the product information
var tiger = {name: "Tiger", cost: 12, info: "This is a full grown tiger and if the correct precautions are not taken it will maul you!"};
var lion = {name: "Lion", cost: 50, info: "This lion just came from Africa. Note: It will not act like you house cat."};
var baboon = {name: "Baboon", cost: 45, info: "Baboons are a lot of fun to have around, great for any party."};
var peacock = {name: "Peacock", cost: 3500, info: "Peacock's look nice but otherwise have no good qualities, they are loud and obnoxious."};

//This function provides the actions after a user clicks purchase
//to add to cart
var purchase = function() {

  //open up a window after they click
  alert("This item has been added to your cart");

  //shows the cart after a click of a product
  document.getElementById("aside").style.display = "block";

}

//This function provides the actions after a user clicks a product
//to show the details of that product
var details = function(animal) {

  //shows the product details
  document.getElementById("productDetails").style.display = "block";
  document.getElementById("showName").textContent = "Animal: " + animal.name;
  document.getElementById("showCost").textContent = "Cost: $" + animal.cost;
  document.getElementById("showDetails").textContent = "Info: " + animal.info;


  //Sorry this code doesnt work yet
  /*
  //This code is from https://codepen.io/davidcochran/pen/WbWXoa
  //with slight modifications
  //It is used to create a button
  document.getElementsById("button").removeChild(button);

  // 1. Create the button
  var button = document.createElement("button");
  button.innerHTML = "Add to Cart";

  // 2. Append somewhere
  var body = document.getElementsById("stuff")[0];
  body.appendChild(button);

  // 3. Add event handler
  button.addEventListener ("click", function() {
    alert("did something");
  });
  */
}
