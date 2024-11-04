let btn = document.querySelector("input");
 let select = document.getElementById("colorSelect");
btn.addEventListener('click', removeOption);

function removeOption(event) {
   
    let value = select.value;
    let options = document.querySelectorAll("option");
    for (let opt of options) {
        if (opt.innerText === value) {
            opt.remove();
        }
    }
}
