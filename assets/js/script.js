var foodRecipe = document.querySelector('#food-recipe-list'); // unordered list for food recipes (parent of li child)
var foodButton = document.querySelector('#food-button'); // food recipe submit button
var foodForm = document.querySelector('#food-form'); // food input value
var foodInput = document.querySelector('#food-input')
var drinkRecipe = document.querySelector('#drink-recipe-list'); // unordered list for drink recipes (parent of li child)
var drinkButton = document.querySelector('#drink-button'); // drink recipe submit button
var drinkInput = document.querySelector('#drink-input'); // drink input value

// form submission for recipes based on input ingredient
var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var ingredient = foodInput.value.trim(); // id of input element for submit form
  
    if (ingredient) {
      getUserRepos(ingredient);
  
      foodRecipe.textContent = ''; // where the ingredients list goes
      foodInput.value = '';
    } else {
      alert('Please enter an ingredient');
    }
  };

  var getIngredientRecipe = function (ingredients) { // request recipes based on ingredients function
    var apiUrl = 'www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredients; // API for fetching recipes based on ingredients
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (ingredient) { // ingredients instead of data
            console.log(ingredient); // ingredients
            displayIngredients(ingredient); // just put ingredients here
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to MealDB');
      });
  };
  

  
  
// create a new list item for the unordered list
// content of the new list item (comes from input value)
// appending the part of the html that will be updated (include classes to match html - establish separately in css)
// add food ingredient input to local storage and create persistent html (e.g. buttons)


// inside fetch API function
var drinkRequestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'; // =vodka will be replaced with '= + meal' from search

// create a new list item for the unordered list
// content of the new list item
// appending the part of the html that will be updated (include classes to match html - establish separately in css)
// add drink ingredient input to local storage and create persistent html (e.g. buttons)