menuItems = [
  {
    name: "Coffee",
    description: "Aromatic and rich, freshly brewed from our house blend",
    price: 3.49,
    discount: 0.1, // 10% discount
  },
  {
    name: "Espresso",
    description: "A strong and flavorful shot of concentrated coffee",
    price: 2.99,
  },
  {
    name: "Cappuccino",
    description: "A delightful mix of espresso, steamed milk, and foam",
    price: 3.99,
    discount: 0.15, // 15% discount
  },
  {
    name: "Water",
    description: "Refreshing and pure, served chilled or room temperature",
    price: 1.49,
  },
  {
    name: "Matcha",
    description: "A revitalizing green tea powder latte, hot or iced",
    price: 4.49,
  },
  {
    name: "Plain Bagel",
    description:
      "A classic, chewy bagel with a touch of crunch, served toasted",
    price: 2.49,
  },
  {
    name: "Blueberry Bagel",
    description: "A tasty blueberry bagel, perfect for a sweet morning treat",
    price: 2.99,
    discount: 0.2, // 20% discount
  },
  {
    name: "Everything Bagel",
    description: "A savory bagel with a variety of seeds, salt, and spices",
    price: 3.29,
  },
  {
    name: "Croissant",
    description:
      "A flaky, buttery pastry, perfect for a light breakfast or snack",
    price: 3.49,
  },
  {
    name: "Breakfast Sandwich",
    description:
      "A delicious combination of egg, cheese, and your choice of bacon, sausage, or ham on a toasted English muffin",
    price: 4.99,
  },
];

const menuItemsDiv = document.getElementById("menu");

for (let n = 0; n < menuItems.length; n++) {
  console.log(menuItems[n]);
  menuItemCard = document.createElement("div");
  menuItemButton = document.createElement("button");
  lineBreak = document.createElement("br");
  let menuItemButtonId = menuItems[n].name.toLowerCase().replace(" ", "-");
  menuItemButton.setAttribute("id", menuItemButtonId);
  menuItemButton.textContent = "Add to Cart";
  let menuItemName = menuItems[n].name;
  menuItemCardMessage = "<b>Name: </b>" + menuItemName;
  menuItemCardMessage =
    menuItemCardMessage +
    "<br>" +
    "<b>Description: </b>" +
    menuItems[n].description;
  let menuItemDiscount = menuItems[n].discount;
  if (menuItemDiscount) {
    menuItemCardMessage =
      menuItemCardMessage +
      "<br>" +
      "<b>Price: </b><s>$" +
      menuItems[n].price +
      "</s> > $" +
      (menuItems[n].price - menuItems[n].price * menuItemDiscount).toFixed(2);
  } else {
    menuItemCardMessage =
      menuItemCardMessage + "<br>" + "<b>Price: </b>$" + menuItems[n].price;
  }
  menuItemCard.innerHTML = menuItemCardMessage;
  menuItemCard.appendChild(lineBreak);
  menuItemCard.appendChild(menuItemButton);
  menuItemsDiv.appendChild(menuItemCard);
  menuItemCoffeeButton = document.getElementById(menuItemButtonId);
  menuItemCoffeeButton.addEventListener("click", () => addToCart(menuItems[n]));
}

// Add the selected menu item to the shopping cart Update the shopping cart summary in the "shopping-cart" div Create a function called displayShoppingCart()
// that updates the content of the "shopping-cart" div with the current items in the shopping cart, displaying their name, price, and total price of the order.
// When the page loads, call the displayMenuItems() function to display the menu items on the page.
// Add event listeners to the "Add to Cart" buttons, so that when the user clicks one, the addToCart() function is triggered.
const shoppingCart = [];
shoppingCartSummaryDiv = document.createElement("div");
shoppingCartSummaryDiv.setAttribute("id", "shopping-cart");
menuItemsDiv.appendChild(shoppingCartSummaryDiv);

function displayShoppingCart() {
  let shoppingCartTotal = 0.0;
  let shoppingCartSavingsTotal = 0.0;
  let shoppingCartSummary = "";
  const shoppingCartItems = {};

  // Loop through the shopping cart
  shoppingCart.forEach((shoppingCartItem) => {
    let shoppingCartPrice = shoppingCartItem.price;
    let discountApplied = false;
    const shoppingCartDiscount = shoppingCartItem.discount;
    if (shoppingCartDiscount) {
      shoppingCartPrice =
        shoppingCartItem.price - shoppingCartItem.price * shoppingCartDiscount;
      discountApplied = true;
      shoppingCartSavingsTotal += shoppingCartItem.price - shoppingCartPrice;
    }
    console.log(shoppingCartItems);
    if (shoppingCartItems[shoppingCartItem.name]) {
      shoppingCartItems[shoppingCartItem.name].quantity += 1;
      shoppingCartItems[shoppingCartItem.name].originalTotalPrice +=
        shoppingCartItem.price;
      shoppingCartItems[shoppingCartItem.name].totalPrice += shoppingCartPrice;
      shoppingCartItems[shoppingCartItem.name].discount = discountApplied;
    } else {
      shoppingCartItems[shoppingCartItem.name] = {
        quantity: 1,
        originalTotalPrice: shoppingCartItem.price,
        totalPrice: shoppingCartPrice,
        discount: discountApplied,
      };
    }
    shoppingCartTotal += shoppingCartPrice;
  });

  Object.entries(shoppingCartItems).forEach(([itemName, itemDetails]) => {
    savingsMessage =
      "<s>$" +
      itemDetails.originalTotalPrice.toFixed(2) +
      "</s> > $" +
      itemDetails.totalPrice.toFixed(2) +
      " (- $" +
      (itemDetails.originalTotalPrice - itemDetails.totalPrice).toFixed(2) +
      ")";
    lineItemSummary = itemDetails.discount
      ? savingsMessage
      : itemDetails.totalPrice.toFixed(2);
    shoppingCartSummary =
      shoppingCartSummary +
      "(" +
      itemDetails.quantity +
      ") " +
      itemName +
      " " +
      lineItemSummary +
      "<br>";
  });

  shoppingCartSummary +=
    "<br>Total Savings: $" + shoppingCartSavingsTotal.toFixed(2);
  shoppingCartSummary += "<br>Total: $" + shoppingCartTotal.toFixed(2);
  shoppingCartSummaryDiv.innerHTML = shoppingCartSummary;
  console.log(shoppingCartSummary);
}

function addToCart(menuItem) {
  shoppingCart.unshift(menuItem);
  displayShoppingCart();
}

window.onload = function () {
  displayShoppingCart();
};
