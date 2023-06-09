const loader = document.querySelector(".loading")

// function
function playCharacter(nameCharacter){
    //show loading
     loader.classList.remove("hidden");
     const action = "salutami";


}

//seleziono gli elementi nell html con classe character
const characters = document.querySelectorAll(".character"); // valutare se farlo singolarmente

// ciclo for each per cliclare gli elementi della classe characters 
characters.forEach(function(element){
    element.addEventListener("click", function(){
        // utilizzando dataset con i data-character nell html  
        playCharacter(element.dataset.character)
    })
})

// my chiave openai
// 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
