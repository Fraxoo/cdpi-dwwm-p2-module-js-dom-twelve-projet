/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts = document.querySelector(".container-toasts");

btn.onclick = function () {
    const saveFileDiv_elem = document.createElement("div");
    saveFileDiv_elem.classList.add("toast");
    const saveFileP_elem = document.createElement("p");
    saveFileP_elem.innerText = "Votre fichier est enregister !";
    ctnToasts.appendChild(saveFileDiv_elem);
    saveFileDiv_elem.appendChild(saveFileP_elem);
    setTimeout(() => {
        saveFileDiv_elem.classList.add("fade");
    }, 1000);
    setTimeout(() => {
        saveFileDiv_elem.remove();
        saveFileP_elem.remove();
        ctnToasts.classList.remove("fade");
    }, 2000)
}
