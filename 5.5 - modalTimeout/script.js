const modal_elem = document.querySelector(".modal");
const modalQuit_elem = document.querySelector(".modal-quit");

setTimeout(() => {
    modal_elem.style.display = "flex";
}, 3000);

modalQuit_elem.onclick = function(){
    modal_elem.style.display = "none"
}