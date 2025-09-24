const buttonClick_elem = document.querySelector("button");
const p_elem = document.querySelector("p");

let click = 0;

buttonClick_elem.onclick = function(){
    p_elem.innerText = `click ${click++}`;
}