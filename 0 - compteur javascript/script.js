const button_elem = document.querySelector("button");
const nombre_elem = document.querySelector("p");

let number = 0;

button_elem.onclick = function() {
    nombre_elem.innerText = number;
    number++;
}