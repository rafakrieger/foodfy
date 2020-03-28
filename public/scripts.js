const recipes = document.querySelectorAll(".card")

for (let recipe of recipes) {
    recipe.addEventListener("click", function(){
        const recipeId = recipe.getAttribute("id")
        window.location.href = `/recipes/${recipeId}`
    })
}