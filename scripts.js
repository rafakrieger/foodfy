const modalOverlay = document.querySelector(".modal-overlay");
const recipes = document.querySelectorAll(".card");

for (let recipe of recipes) {
    recipe.addEventListener("click", function(){
        modalOverlay.classList.add("active");        
        modalOverlay.querySelector("img").src = recipe.querySelector("img").src;
        modalOverlay.querySelector(".recipe-title").innerHTML = recipe.querySelector("h4").innerHTML;
        modalOverlay.querySelector(".recipe-author").innerHTML = recipe.querySelector("p").innerHTML;
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");    
})
