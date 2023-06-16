// #####################
// Day 4 Exercise - Terminal Based Library
// You are going to make a command line program that allows a user to keep track of books. Follow the steps bellow to do so. I have provided a starting point for you in the library.js file.
import readline from "readline";
import fs from "fs";
import chalk from "chalk";
import boxen from "boxen";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function styleText(output, color) {
  return boxen(chalk[color](output), {
    padding: 1,
    borderColor: color,
    dimBorder: true,
  });
}

// console.log(usage);

// #########################
// List Menu
// create an array of objects, each object should have a name, price, and description for a menu item
// create a function that will list the menu items, the description, and their prices
// hook this function up to the cli/prompt

const menuItems = [
  {
    name: "Coffee",
    price: 2.99,
    description: "Super hot coffee",
  },
  {
    name: "Water",
    price: 1.99,
    description: "Super cold water",
  },
  {
    name: "Bagel",
    price: 3.99,
    description: "Super fresh bagel",
  },
  {
    name: "Ice Cream",
    price: 2.99,
    description: "Super creamy ice",
  },
];

function listMenuItems() {
  let output = "\nMenu Items:\n\n";
  for (let item of menuItems) {
    output += `${item.name} - ${item.price} - ${item.description}\n`;
  }

  return styleText(output, "cyan");
}

// #########################

// #########################
// Order
// create a function that will add an item to the customers order (order would be an array stored in global state, that stores the item name)

const orderedItems = [];

function orderItem(itemName) {
  let item = menuItems.find(
    (item) => item.name.toLowerCase() === itemName.toLowerCase()
  );

  if (item) {
    orderedItems.push(item.name);
    return `Found Menu Item ${item.name}`;
  } else {
    return `Menu Item Not Found`;
  }
}

// #########################

// #########################
// Checkout
// create a function that will calculate the total price of the order, and the total items in their order, and show that to the user

function checkoutItems(orderedItems) {
  let returnStatement = "";
  if (orderedItems.length > 0) {
    let totalPrice = 0.0;
    // console.log("Items Found");
    function onlyUnique(value, index, array) {
      return array.indexOf(value) === index;
    }
    const distinctOrderedItems = orderedItems.filter(onlyUnique);
    // console.log(distinctOrderedItems);
    const orderedItemDetails = [];
    distinctOrderedItems.forEach((distinctItem) => {
      let foundMenuItem = menuItems.find(
        (item) => item.name.toLowerCase() === distinctItem.toLowerCase()
      );

      if (foundMenuItem) {
        let orderedItemsCount = orderedItems.filter(
          (itemName) => itemName.toLowerCase() === distinctItem.toLowerCase()
        ).length;
        orderedItemDetails.push({
          name: foundMenuItem.name,
          quantity: orderedItemsCount,
          price: foundMenuItem.price,
          totalPrice: foundMenuItem.price * orderedItemsCount,
        });
        totalPrice += foundMenuItem.price * orderedItemsCount;
      }
    });
    returnStatement += `\n\n${listOrderedItems(orderedItemDetails)}`;
    returnStatement += `\n\nTotal: $ ${totalPrice.toFixed(2)}`;
  } else {
    returnStatement += "No items found to checkout";
  }
  return styleText(returnStatement, "magenta");
}

function listOrderedItems(orderedItemDetails) {
  let output = "";
  for (let item of orderedItemDetails) {
    output += `${item.name} ($${item.price}) x ${item.quantity} - $${item.totalPrice}\n`;
  }
  return styleText(output, "yellow");
}

// #########################

// #########################
// Suggest Using Weather API

function suggestItem(temp) {
  let returnStatement = "";
  if (temp >= 80) {
    returnStatement += "I'd suggest a Water and some Ice Cream!";
  } else if (temp < 80 && temp > 60) {
    returnStatement += "Hmm... I'd suggest a Water and Bagel!";
  } else {
    returnStatement += "I'd suggest a Coffee and a Bagel!";
  }
  return returnStatement;
}

async function getWeather(zip, daysFromNow) {
  let daysFromNowIndex = +daysFromNow + 1;
  let returnStatement = "";
  let url =
    "https://api.weatherapi.com/v1/forecast.json?key=1140cbaecfc84b58a52173639230306&aqi=no&alerts=no";
  if (zip) {
    url = `${url}&q=${zip}`;
  }
  if (daysFromNow) {
    url = `${url}&days=${daysFromNowIndex}`;
  } else {
    url = `${url}&days=1`;
  }
  const currentWeatherPromise = await fetch(url);
  const json = await currentWeatherPromise.json();
  if (daysFromNow) {
    console.log(json.forecast);
    returnStatement += `\n\nOn ${json.forecast.forecastday[daysFromNow].date}, the temperature in ${json.location.name}, ${json.location.region} will be ${json.forecast.forecastday[daysFromNow].day.maxtemp_f}!`;
    returnStatement += `\n\n${suggestItem(
      json.forecast.forecastday[daysFromNow].day.maxtemp_f
    )}`;
  } else {
    returnStatement += `\n\nThe current temperature in ${json.location.name}, ${json.location.region} is ${json.current.temp_f}!\n\nCondition: ${json.current.condition.text}`;
    returnStatement += `\n\n${suggestItem(json.current.temp_f)}`;
  }
  returnStatement += `\n\n${listMenuItems()}`;
  return styleText(returnStatement, "green");
}
// #########################

// #########################
// Terminal Prompts

var shortCommands =
  "Please use the following commands: 'l' = List Menu Items, 'o'= Order, 'c' = Checkout, 's' = Suggest, 'fs' = Future Suggest, 'e' = Exit";

function prompt() {
  rl.question(
    `\nWhat would you like to do?\n\n${shortCommands}\n\n`,
    (answer) => {
      if (answer.toLowerCase() === "l") {
        console.log(listMenuItems(menuItems));
        prompt();
      } else if (answer.toLowerCase() === "o") {
        rl.question(
          `\nWhat would you like to order? Please use the item name found in the menu below:\n${listMenuItems()}\n\n`,
          (itemName) => {
            orderItem(itemName);
            console.log(`\nShopping Cart:\n\n${checkoutItems(orderedItems)}\n`);
            prompt();
          }
        );
      } else if (answer.toLowerCase() === "c") {
        console.log(
          `\nShopping Cart:\n\n${checkoutItems(orderedItems)}\n\n${styleText(
            "Thank You, Come Again! ☺",
            "yellow"
          )}`
        );
        prompt();
      } else if (answer.toLowerCase() === "s") {
        rl.question(`\nWhat's your Zip Code?\n\n`, async (zipCode) => {
          console.log(await getWeather(zipCode));
          prompt();
        });
      } else if (answer.toLowerCase() === "fs") {
        rl.question(`\nWhat's your Zip Code?\n\n`, async (zipCode) => {
          rl.question(
            `\nHow many days from now? Please enter a less greater than '14'!\n\n`,
            async (daysFromNow) => {
              if (daysFromNow > 14) {
                prompt();
              } else {
                console.log(await getWeather(zipCode, daysFromNow));
                prompt();
              }
            }
          );
        });
      } else if (answer.toLowerCase() === "e") {
        rl.close();
      } else {
        console.log(`${shortCommands}`);
        prompt();
      }
      // console.log("After: " + answer);
    }
  );
}

// #########################

prompt();
