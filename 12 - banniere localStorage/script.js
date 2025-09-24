/**
 * localStorage
 * setItem()
 * getItem()
 * Fonctionnement de Stockage et des cookies
 */
const acceptButton_elem = document.querySelector(".btn-accept");
const cookies_elem = document.querySelector(".cookies")
const okCookie = localStorage.getItem("cookie");

if(okCookie === "1"){
    cookies_elem.style.display = "none"
};

acceptButton_elem.onclick = function(){
    cookies_elem.classList.add("fade");
    localStorage.setItem("cookie","1");
}