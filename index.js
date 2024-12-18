let food = document.querySelector(".food");
let recipe;
let indian = document.querySelector("#indian");
let canadian = document.querySelector("#canadian");
let american = document.querySelector("#american");
let thai = document.querySelector("#thai");
let british = document.querySelector("#british");
let russian = document.querySelector("#russian");

const fetchdata = async (area) => {
  const api = await fetch(`
https://www.themealdb.com/api/json/v1/1/filter.php?a=${area} `);
  let data = await api.json();
  recipe = data.meals;
  showData(recipe);
};
const searchrecipe = () => {
  let input = document.querySelector("#search");

  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let inputValue = input.value;
      // console.log(inputValue);
      const api = await fetch(`
        https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue} `);
      let data = await api.json();
      recipe = data.meals;
      showData(recipe);
    }
  });
};

searchrecipe();

let showData = (recipe) => {
  food.innerHTML = recipe
    .map(
      (meal) => `
    <div style="text-align:center" > 
     <div> 
    <img src =${meal.strMealThumb} style=" width:200px; border-radius:10px; border:1px solid blue"/>
    </div>
    <h5 style="margin:10px">${meal.strMeal}</h5>
    </div>
    
    `
    )
    .join("");
};

american.addEventListener("click", () => {
  fetchdata("american");
});

canadian.addEventListener("click", () => {
  fetchdata("canadian");
});

thai.addEventListener("click", () => {
  fetchdata("thai");
});

british.addEventListener("click", () => {
  fetchdata("british");
});

russian.addEventListener("click", () => {
  fetchdata("russian");
});

indian.addEventListener("click", () => {
  fetchdata("indian");
});
fetchdata("indian");
