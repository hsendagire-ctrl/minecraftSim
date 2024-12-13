// Functionize Minecraft Fishing Start Code

let codCount = document.getElementById("num-cod");
let salmonCount = document.getElementById("num-salmon");
let tropicalCount = document.getElementById("num-tropical");
let pufferCount = document.getElementById("num-puffer");
var imgOutput = document.getElementById("result-img");

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Selecting Charactor
  let character = document.getElementById("character-select").value;

  if (character == "steve") {
    // Steve Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      imgOutput.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
    } else if (randNum < 0.9) {
      imgOutput.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numCod;
    } else if (randNum < 0.95) {
      imgOutput.src = "img/Tropical-fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
    } else {
      imgOutput.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
    }
  } else if (character == "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      imgOutput.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
    } else if (randNum < 0.2) {
      imgOutput.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numCod;
    } else if (randNum < 0.5) {
      imgOutput.src = "img/Tropical-fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
    } else {
      imgOutput.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
    }
  } else if (character == "villager") {
    let randNum = Math.random();
    console.log(randNum);
    console.log(numCod);
    console.log(numSalmon);
    console.log(numTropical);
    console.log(numPuffer);
    if (randNum < 0.25) {
      imgOutput.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
    } else if (randNum < 0.5) {
      imgOutput.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      imgOutput.src = "img/Tropical-fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
    } else {
      imgOutput.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
    }
  }
}
