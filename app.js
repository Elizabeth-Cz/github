const chickenCaesarSalad = document.getElementById("chicken-caesar-salad");
const grilledCheese = document.getElementById("grilled-cheese");
const greekSalad = document.getElementById("greek-salad");
const mushroomPasta = document.getElementById("mushroom-pasta");
const gyoza = document.getElementById("gyoza");
const burgers = document.getElementById("burgers");
const tikkaMasala = document.getElementById("tikka-masala");
const deselectBtn = document.getElementById("deselect");
const mealContainer = document.querySelector(".meal__container");
const scheduleContainer = document.querySelector(".schedule__container");

let selectedColor, active;
// EVENT LISTENERS

mealContainer.addEventListener("click", selectMeal);
scheduleContainer.addEventListener("click", setColors);
deselectBtn.addEventListener("click", resetMeals);

// Meal click

function selectMeal(e) {
  resetMeals();
  mealColor = e.target.style.backgroundColor;

  switch (e.target.id) {
    case "chicken-caesar-salad":
      activeMeal(chickenCaesarSalad, mealColor);
      text = e.target.innerHTML;
      break;
    case "grilled-cheese":
      activeMeal(grilledCheese, mealColor);
      text = e.target.innerHTML;
      break;
    case "greek-salad":
      activeMeal(greekSalad, mealColor);
      text = e.target.innerHTML;
      break;
    case "mushroom-pasta":
      activeMeal(mushroomPasta, mealColor);
      text = e.target.innerHTML;
      break;
    case "gyoza":
      activeMeal(gyoza, mealColor);
      text = e.target.innerHTML;
      break;
    case "burgers":
      activeMeal(burgers, mealColor);
      text = e.target.innerHTML;
      break;
    case "tikka-masala":
      activeMeal(tikkaMasala, mealColor);
      text = e.target.innerHTML;
      break;
  }
}

// set color for schedule
function setColors(e) {
  if (e.target.style.backgroundColor === selectedColor) {
    resetColor(e);
  } else if (e.target.classList.contains("meal") && active === true) {
    e.target.style.backgroundColor = selectedColor;
    e.target.innerHTML = text;
    console.log(e.target);
  }
}

function resetColor(e) {
  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
  e.target.innerHTML = "";
  console.log(e);
}

// select meal

function activeMeal(meal, color) {
  meal.classList.toggle("selected");
  if (meal.classList.contains("selected")) {
    active = true;
    selectedColor = color;
    return selectedColor;
  } else {
    active = false;
  }
}

// Reset meals

function resetMeals() {
  const allMeals = document.querySelectorAll(".meal__name");

  allMeals.forEach((item) => {
    item.className = "meal__name";
    active = false;
  });
}

function findColor(e) {
  color = e.target.style.fontFamily;
  console.log(color);
}
greekSalad.addEventListener("click", findColor);
