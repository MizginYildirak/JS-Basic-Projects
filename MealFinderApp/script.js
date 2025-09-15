const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  random = document.getElementById("random"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("result-heading"),
  single_mealEl = document.getElementById("single-meal");

submit.addEventListener("submit", searchMeal);
random.addEventListener("click", getRandomMeal);

async function searchMeal(e) {
  e.preventDefault();

  const term = search.value;

  if (term.trim()) {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
      );
      const data = await res.json();

      console.log(data);
      resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

      if (data.meals === null) {
        resultHeading.innerHTML = `<p>No search results. Try again!</p>`;
      } else {
        console.log("datameals:", data.meals);
        mealsEl.innerHTML = data.meals
          .map(
            (meal) =>
              `
            <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
            </div>
          `
          )
          .join("");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  } else {
    alert("Please enter a search term");
  }
}

async function getRandomMeal(e) {
  mealsEl.innerHTML = "";
  resultHeading.innerHTML = "";

  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);

  const data = await res.json();

  const randomMeal = data.meals[0];

  mealsEl.innerHTML = `
    <div class="single-meal">
      <h1>${randomMeal.strMeal}</h1>

      <img src="${randomMeal.strMealThumb}" alt="${randomMeal.strMeal}" />
      <div class="meal-info" data-mealID="${randomMeal.idMeal}">
        <h3>${randomMeal.strMeal}</h3>
      </div>
    </div>
  `;
  addMealToDOM(randomMeal);
  console.log("randomdata:", data);
  console.log(data.meals);
  console.log(data.meals[0]);
  console.log(data.meals[0].strMeal);
}

function addMealToDOM(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`] && meal[`strIngredient${i}`].trim() !== "") {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    }
  }

  mealsEl.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="single-meal-info">
        ${
          meal.strCategory
            ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
            : ""
        }
        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ""}
      </div>
      <div class="main">
        <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}
