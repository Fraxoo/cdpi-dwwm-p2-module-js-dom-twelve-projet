const imgTop_elem = document.querySelector("#full");
const imgBotton_elem = document.querySelectorAll(".small");
console.log(imgBotton_elem);

let click = 0;

imgBotton_elem.forEach(img => {
    img.onclick = function(){
        const imgSrc = img.getAttribute("src");
        const imgTopSrc = imgTop_elem.getAttribute("src")
        imgTop_elem.setAttribute("src",imgSrc);
        img.setAttribute("src",imgTopSrc);
    }
});

const addCartButton_elem = document.querySelector(".btn-add");

addCartButton_elem.onclick = function(){
    click++;
    const ajout = document.querySelector(".panier-msg");
    ajout.textContent = "Vous avez "+click+" produits dans votre panier."
}
