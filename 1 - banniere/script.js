/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

const cookieDisplay_elem = document.querySelector(".cookies");
const cookieButton = cookieDisplay_elem.querySelector(".btn-accept");

console.log(cookieButton);
console.log(cookieDisplay_elem);


// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"

cookieButton.onclick = function(){
    cookieDisplay_elem.classList.add("hidden")

    
}


