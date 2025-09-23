/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley
const smilerIcone_elem = document.querySelector("#emoji");
console.log(smilerIcone_elem);


// 2. Je recupere le bouton ABONNER
const subButton_elem = document.querySelector(".btn-sub");
console.log(subButton_elem);

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur
let sub = 0;
let like = 0;
// 4. J'ecoute le clique sur l'icone smiley

smilerIcone_elem.onclick = function(){
    if(like === 0){
        like++;
        smilerIcone_elem.classList.remove("fa-face-meh");
        smilerIcone_elem.classList.add("fa-smile-wink");
        smilerIcone_elem.classList.add("happy");
    }else{
        like--;
        smilerIcone_elem.classList.remove("fa-smile-wink");
        smilerIcone_elem.classList.remove("happy");
        smilerIcone_elem.classList.add("fa-face-meh");
    }    
}

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
subButton_elem.onclick = function(){
    if(sub === 0){
        sub++;
        subButton_elem.classList.add("abonne");
    }else if(sub === 1){
        sub--;
        subButton_elem.classList.remove("abonne");
    }
}