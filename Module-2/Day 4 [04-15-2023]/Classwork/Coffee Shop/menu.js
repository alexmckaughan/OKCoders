// loginButton.addEventListener("click", () => loginRequest());
// #2 Adding Items to the Shopping Cart
// add click handlers to all the items on your menu (this can be a button or on the whole item card)
// when the user clicks on an item, it should be added to the shopping cart
// the shopping cart should update and have the current number of items in the cart
// the shopping cart should also update and have the current total price of all items in the cart

// #3 Removing Items from the Shopping Cart
// if an item is in the shopping cart, there should be a button next to it that says "remove"
// when the user clicks the remove button, the item should be removed from the shopping cart
// the total # of items should be updated and the total price should be updated

const shoppingCart = [];
const shoppingCartInfo = document.getElementById("cart");
const subTotalInfo = document.getElementById("subtotal");
const totalInfo = document.getElementById("total");
const taxRate = 1;

function addRemoveCart(itemName, addOrRemove) {
  if (addOrRemove == "Add") {
    shoppingCart.push(itemName);
  } else {
    shoppingCart.splice(shoppingCart.indexOf(itemName), 1);
  }
  shoppingCartInfo.textContent = " " + shoppingCart.length;
  subTotalInfo.textContent = "$" + (shoppingCart.length * 2.99).toFixed(2);
  totalInfo.textContent =
    "$" + (taxRate * (shoppingCart.length * 2.99)).toFixed(2);
  console.log(shoppingCart);
  const currentElement = document.getElementById(itemName);
  console.log("currentElement: " + currentElement.innerHTML);
  console.log(currentElement.parentElement.previousElementSibling.innerText);
  const price =
    currentElement.parentElement.previousElementSibling.innerText.match(
      /\d+(?:\.\d+)?/g
    );
  console.log("price: " + price);
}

const addDrink1 = document.getElementById("addDrink1");
const addDrink2 = document.getElementById("addDrink2");
const addDrink3 = document.getElementById("addDrink3");
const addDrink4 = document.getElementById("addDrink4");
const addDrink5 = document.getElementById("addDrink5");
const addDrink6 = document.getElementById("addDrink6");
const removeDrink1 = document.getElementById("removeDrink1");
const removeDrink2 = document.getElementById("removeDrink2");
const removeDrink3 = document.getElementById("removeDrink3");
const removeDrink4 = document.getElementById("removeDrink4");
const removeDrink5 = document.getElementById("removeDrink5");
const removeDrink6 = document.getElementById("removeDrink6");

addDrink1.addEventListener("click", () => addRemoveCart("addDrink1", "Add"));
addDrink2.addEventListener("click", () => addRemoveCart("addDrink2", "Add"));
addDrink3.addEventListener("click", () => addRemoveCart("addDrink3", "Add"));
addDrink4.addEventListener("click", () => addRemoveCart("addDrink4", "Add"));
addDrink5.addEventListener("click", () => addRemoveCart("addDrink5", "Add"));
addDrink6.addEventListener("click", () => addRemoveCart("addDrink6", "Add"));
removeDrink1.addEventListener("click", () =>
  addRemoveCart("removeDrink1", "Remove")
);
removeDrink2.addEventListener("click", () =>
  addRemoveCart("removeDrink2", "Remove")
);
removeDrink3.addEventListener("click", () =>
  addRemoveCart("removeDrink3", "Remove")
);
removeDrink4.addEventListener("click", () =>
  addRemoveCart("removeDrink4", "Remove")
);
removeDrink5.addEventListener("click", () =>
  addRemoveCart("removeDrink5", "Remove")
);
removeDrink6.addEventListener("click", () =>
  addRemoveCart("removeDrink6", "Remove")
);
