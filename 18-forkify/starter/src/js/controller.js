const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/...');

    const data = await res.json();
    console.log(res, data);
  } catch (err) {
    alert(err);
  }
};
showRecipe();
