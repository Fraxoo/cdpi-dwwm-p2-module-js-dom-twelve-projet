/**
 * firstChild
 * lastChild
 * childNodes
 * nextSibiling MAIS preferez nextElementSibiling pour eviter de selectionner les passages à la ligne
 * previousSibiling MAIS preferez previousElementSibiling  pour eviter de selectionner les passages à la ligne
 * 
 */

// 1. Je recupere toutes les questions
const questions = document.querySelectorAll(".question");

// 2. Je parcours toutes les questions
questions.forEach(function(question){
    // 3. Lors du click sur la question
    question.addEventListener("click",function(){
        const reponse = question.nextElementSibling;
        reponse.classList.toggle("show-reponse");
        const arrow = question.querySelector("i");
        arrow.classList.toggle("fa-chevron-down");
        arrow.classList.toggle("fa-chevron-up");
    });
});
