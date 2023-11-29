let link = document.getElementById("link")
let menu = document.getElementById("menu")
let spn = document.getElementsByClassName("span")

menu.onclick = function active(){
    link.classList.toggle("is-active")
    spn[0].classList.toggle("is-active")
    spn[1].classList.toggle("is-active")
    spn[2].classList.toggle("is-active")
}