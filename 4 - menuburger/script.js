
// 1. Je recupere le burger
const burger = document.querySelector(".burger");
// 2. Je recupere la fenetre modal
const modal = document.querySelector(".modal");

burger.onclick = function(){
    burger.classList.toggle("fa-x");
    burger.classList.toggle("show-modal");
    modal.classList.toggle("show-modal");
    
}
