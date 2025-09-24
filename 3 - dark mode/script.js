const darkModeButton_elem = document.querySelector(".btn");
const all_elem_array = document.querySelectorAll("*");

console.log(all_elem_array);


darkModeButton_elem.onclick = function(){
    all_elem_array.forEach((all) => {
        all.classList.toggle("darkmode");
    })
}