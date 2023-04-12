var className = "OKCoders";
var testNumber = 1;
var testNumber2 = 2.0;
var myOtherClassName;

console.log(className);

var basicMath = 1 + 1;
var advancedMath = basicMath * 2;

// prompts and fetches the user position
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position);
  },
  (error) => {
    console.log(error);
  }
);
// Event listener for clicking an HTML element
var userIconElement = document.getElementById("user-icon");
console.log(userIconElement);
userIconElement.addEventListener("click", () => {
  console.log("I was clicked!");
});


// console.log(message);
// var firstNameInitial = userName[0];
// var spacePosition = userName.indexOf(" ");
// var lastNameInitial = userName[spacePosition + 1];
// console.log(firstNameInitial);
// console.log(lastNameInitial);
// var avatarStringTag = document.getElementById("avatar-string")
// avatarStringTag.innerText = firstNameInitial + lastNameInitial;

var sayHelloButton = document.getElementById("say-hello-button");

var h1MessageTag = document.getElementById("message");

function clickHandler() {
    var userName = prompt("What is your name?");
    var userAge = prompt("What is your age?");
    var message = "Your name is " + userName + " and age is " + userAge;
    h1MessageTag.innerText = message;
}

sayHelloButton.addEventListener("click", clickHandler);

var myArray = [1,2,3,4,5];
const secondArray = ["name1","name2","name3"];
var secondElement = secondArray[1];
var lastElement = [secondArray.length - 1];
secondArray.push("name4","name5");
console.log("After shift: " + secondArray);
name1Index = secondArray.indexOf("name1");
secondArray.splice(name1Index,1);
console.log("After splice: " + secondArray);
// secondArray = secondArray.unshift;
// console.log(secondArray);


const shoppingCart = [];
const shoppingCartInfo = document.getElementById("shopping-cart");
 function addItemToCart(itemName){
    shoppingCart.push(itemName);
    shoppingCartInfo.textContent = shoppingCart.length;
    console.log(shoppingCart);
 }

 const pants = document.getElementById("pants");
 const tShirt = document.getElementById("t-shirt");
 const hat = document.getElementById("hat");

 pants.addEventListener("click",()=> addItemToCart("pants"));
 tShirt.addEventListener("click",()=> addItemToCart("t-shirt"));
 hat.addEventListener("click",()=> addItemToCart("hat"));



function beginBeerGame(){
    numberOfBeers = prompt("How many beers on the wall?");
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(numberOfBeers + " bottles of beer on the wall, " + numberOfBeers + " bottles of beer.");
    newDiv.appendChild(newContent);
    containerBeerDiv.insertBefore(newDiv, numberOfBeersMessage);
}

document.addEventListener("DOMContentLoaded", function() {
    beginBeerGame();
});

 const numberOfBeersMessage = document.getElementById("number-of-beers");
 const containerBeerDiv = document.getElementById("beer-container");

 function subtractABeer(){
      if (confirm("Pass it around?")){
          numberOfBeers -= 1;
      }
     const newDiv = document.createElement("div");
     const newContent = document.createTextNode(numberOfBeers + " bottles of beer on the wall, " + numberOfBeers + " bottles of beer.");
     newDiv.appendChild(newContent);
     containerBeerDiv.insertBefore(newDiv, numberOfBeersMessage);
 }
 
 subtractBeerButton = document.getElementById("subtract-beer");
 subtractBeerButton.addEventListener("click", () => subtractABeer());
