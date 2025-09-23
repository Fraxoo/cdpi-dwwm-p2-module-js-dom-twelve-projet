/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/
const darkModeBtn_elem = document.querySelector(".btn")
const tableauDeBalise = document.querySelectorAll("body, section, .switch, .btn, .icon");
console.log(tableauDeBalise);

darkModeBtn_elem.onclick = function(){
    tableauDeBalise.forEach((balise) => {
        balise.classList.toggle("darkmode")
        
    })
}