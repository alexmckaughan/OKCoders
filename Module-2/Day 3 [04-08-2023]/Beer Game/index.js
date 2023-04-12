const containerBeerDiv = document.getElementById("beer-container");

function beginBeerGame() {
  numberOfBeers = prompt("How many beers on the wall?");
  const newDiv = document.createElement("div");
  newDiv.innerHTML =
    numberOfBeers +
    " bottle(s) of beer on the wall, " +
    numberOfBeers +
    " bottle(s) of beer.";
  containerBeerDiv.appendChild(newDiv);
}

document.addEventListener("DOMContentLoaded", function () {
  beginBeerGame();
});

function subtractABeer() {
  const newDiv = document.createElement("div");
  let newContent;
  if (numberOfBeers >= 1) {
    if (confirm("Pass it around?")) {
      numberOfBeers -= 1;
    }
    newDiv.innerHTML =
      numberOfBeers +
      " bottle(s) of beer on the wall, " +
      numberOfBeers +
      " bottle(s) of beer.";
  } else {
    newDiv.innerHTML = "WE NEED MORE BEERS!!!";
    numberOfBeers = prompt("How beers do many we need more!!?");
  }
  containerBeerDiv.appendChild(newDiv);
}

subtractBeerButton = document.getElementById("subtract-beer");
subtractBeerButton.addEventListener("click", () => subtractABeer());
