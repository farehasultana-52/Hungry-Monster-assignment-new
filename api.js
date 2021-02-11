const searchCategory = (meals) =>{
    const findMeals = document.getElementById('search-value');
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${findMeals}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}


const displayMeals = meals =>{
    const mealsDiv = document.getElementById('categories');
    // for (let i = 0; i < meals.length; i++) {
    //     const meal = meals[i];
        const mealDiv = document.createElement('div');
        mealDiv.className = 'category'
        // const h3 = document.createElement('h3');
        // mealsDiv.innerText = meal.strMeal;
        
        const mealInfo = `
        <img src="${meal.strMealThumb}">;
        <h3 class = "name">${meal.strMeal}</h3>;
        <button onclick="displayCategoryDetail('${meal.strMeal}')">Details</button>;
            
        `
                    mealDiv.innerHTML = mealInfo;
                    mealsDiv.appendChild(mealDiv);
        
        
    
};
















// // const searchBtn = document.getElementById('search-btn');
// // searchBtn.addEventListener('click' function(){

// //     let searchValue = document.getElementById('search-value').value;
// //     searchValue = searchValue.trim();
// //     if( searchValue != "") {

// //     }
// // });

// //  const searchCategory = () =>{
// //      const findMeals = document.getElementById('search-value');
// //      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${findMeals}`
    
// //  };
//  fetch =`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
//     .then(res => res.json())
//     .then(data => displayMeals(data.meals));


// const displayMeals = meals => {
//     const mealsDiv = document.getElementById('categories');
//     meals.forEach(meal => {
//         // const category = categories[i];
//             const mealDiv = document.createElement('div');
//             mealDiv.className ='category';
// //             // const h3 = document.createElement('h3');
// //             // h3.innerText = category.strCategory;
// //             // categoryDiv.appendChild(h3);
//             const mealInfo = `
//             <img src="${meal.strMealThumb}">
//             <h3 class = "name">${meal.strMeal}</h3>
//             <button onclick="displayCategoryDetail('${meal.strMeal}')">Details</button>
    
//             `;
//             mealDiv.innerHTML = mealInfo;
//             mealsDiv.appendChild(mealDiv);
//     });
// //     // for (let i = 0; i < categories.length; i++) {
// //     //    ;
// //     // } 
// };
// // // const displayCategoryDetail = strCategory => {
// //     const url = `https://www.themealdb.com/api/json/v1/1/categories.php/${strCategory}`;
// //     fetch(url)
// //     .then(res => res.json())
// //     .then(data => renderCategoryInfo(data.categories[0]));
// // };


// // const renderCategoryInfo = category => {

// //     const categoryDiv = document.getElementById('categoryDetail');
// //     categoryDiv.innerHTML =`
// //     <img src="${category.strCategoryThumb}">;
// //     <h1>${category.strCategory}</h1>;
// //     <p>${category.strCategoryDescription}</P>;

// //     `
// // };

