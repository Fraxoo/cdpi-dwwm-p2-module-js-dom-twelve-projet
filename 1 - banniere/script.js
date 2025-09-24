const acceptButton_elem = document.querySelector(".btn-accept");
const bannier_elem = document.querySelector(".cookies");

acceptButton_elem.onclick = function(){
    acceptButton_elem.classList.replace("btn-accept","hidden")
}