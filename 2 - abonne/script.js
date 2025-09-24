// fa-smile-wink happy

const subButton_elem = document.querySelector(".btn-sub");
const smileyButton_elem = document.querySelector(".fa-solid");

subButton_elem.onclick = function(){
    subButton_elem.classList.toggle("abonne");
    
}

smileyButton_elem.onclick = function(){
    smileyButton_elem.classList.toggle("fa-face-meh");
    smileyButton_elem.classList.toggle("fa-smile-wink");
    smileyButton_elem.classList.toggle("happy");
}