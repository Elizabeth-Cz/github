const greenCurry = document.getElementById("green-curry");
const meatballs = document.getElementById("meatballs");
const greekSalad = document.getElementById("greek-salad");
const mushroomPasta = document.getElementById("mushroom-pasta");
const couscous = document.getElementById("couscous");
const chickenSalad = document.getElementById("chicken-salad");
const deselect = document.getElementById("deselect");
const mealContainer = document.querySelector(".meal__container");
const scheduleContainer = document.querySelector(".schedule__container");

let selectedColor, active;
// EVENT LISTENERS

mealContainer.addEventListener("click", selectMeal);

// Meal click

function selectMeal(e) {
  resetMeals();
  mealColor = e.target.style.backgroundColor;

  switch (e.target.id) {
    case "green-curry":
      activeMeal(greenCurry);
      break;
    case "meatballs":
      activeMeal(meatballs);
      break;
    case "greek-salad":
      activeMeal(greekSalad);
      break;
    case "mushroom-pasta":
      activeMeal(mushroomPasta);
      break;
    case "couscous":
      activeMeal(couscous);
      break;
    case "chicken-salad":
      activeMeal(chickenSalad);
      break;
  }
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
  });
}

function findColor(e) {
  color = e.target.style.fontFamily;
  console.log(color);
}
greekSalad.addEventListener("click", findColor);
