const recipes = document.querySelectorAll(".card")
const button = document.querySelectorAll(".button")
const description = document.querySelectorAll(".recipe-description")

for (let recipe of recipes) {
    recipe.addEventListener("click", function(){
        const recipeId = recipe.getAttribute("id")
        window.location.href = `/recipes/${recipeId}`
    })
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(){       
        if (description[i].classList.contains("hide")) {
            button[i].textContent = "ESCONDER"
            description[i].classList.remove("hide")
        }else {
            button[i].textContent = "MOSTRAR"
            description[i].classList.add("hide")
        }
    })
}