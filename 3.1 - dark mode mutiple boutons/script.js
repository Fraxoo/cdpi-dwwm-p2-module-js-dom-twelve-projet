const switchButton_elem = document.querySelectorAll(".switch");
const all_elem = document.querySelectorAll("*");

switchButton_elem.forEach((switchButton)=>{
    switchButton.onclick = function(){
        all_elem.forEach((all)=> {
            all.classList.toggle("darkmode");
        })
    }
})