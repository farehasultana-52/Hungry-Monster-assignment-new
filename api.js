const searchMeals = () => {
    const searchText = document.getElementById('search-value').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const mealsDiv = document.getElementById('food-container');
    mealsDiv.innerHTML = '';
    meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.className = 'container';
   
   
    const mealInfo =`
    <img id="image" src="${meal.strMealThumb}">
    <h3 id="name">${meal.strMeal}</h3>
    <button onclick = "displayMealDetail('${meal.strMeal}')">Details</button>
    `
    mealDiv.innerHTML = mealInfo;
    mealsDiv.appendChild(mealDiv);
   });
   
}

const displayMealDetail = strMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals[0]));
         
    
};
const renderMealInfo = meal => {
    const mealDiv = document.getElementById('information');
    mealDiv.innerHTML = `
    <img id="image" src="${meal.strMealThumb}">
    <h1 class="card-title">${meal.strMeal}</h1>
    <h2 id="item">Ingredient</h2>

    <h5 class="number">${meal.strIngredient1}</h5>
    <h5 class="number">${meal.strIngredient2}</h5>
    <h5 class="number">${meal.strIngredient3}</h5>
    <h5 class="number">${meal.strIngredient4}</h5>
    <h5 class="number">${meal.strIngredient5}</h5>
    <h5 class="number">${meal.strIngredient}</h5>

    `
};


