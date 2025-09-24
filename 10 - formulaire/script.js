/**
 * Event submit
 * event.preventDefault()
 * HTMLInputElement.value
 * String.prototype.trim()
 * regex
 * RegexExp.prototype.test()
 */



/**
 * 1 .Je recupère
 *      - le formulaire
 *      - le champ prenom
 *      - le champ nom
 *      - le champ email
 *      - le champ message
 */
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

// 2. Lorsque le formulaire est soumit (clique du bouton submit ou touche ENTER)
form.addEventListener("submit",function(event){
    event.preventDefault();
    const formData = new FormData(form);
    if(formData.get("prenom").length < 2 || formData.get("prenom").length > 20){
        const error = prenom.nextElementSibling;
        error.classList.remove("invisible")
    }
    if(formData.get("nom").length < 2 || formData.get("nom").length > 20){
        const error = nom.nextElementSibling;
        error.classList.remove("invisible");
    }
    if(isValidEmail(formData.get("email"))){
        const error = email.nextElementSibling;
        error.classList.remove("invisible");
    }
    if(formData.get("message").length < 10 || formData.get("message").length > 100){
        const error = message.nextElementSibling;
        error.classList.remove("invisible");
    }
    
    
});
























/**
 * HELPERS FUNCTIONS
 */
/**
 * Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide.
 */
function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email))
    {
        return true;
    }else{
        return false
    }
}


/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message,from){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"message":"${message}","from":"${from}"}`
      };
      
    fetch('http://localhost:3000/sendmail', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}