let link = document.getElementById("link")
let menu = document.getElementById("menu")
let spn = document.getElementsByClassName("span")

menu.onclick = function active(){
    link.classList.toggle("is-active")
    spn[0].classList.toggle("is-active")
    spn[1].classList.toggle("is-active")
    spn[2].classList.toggle("is-active")
}

let nameCrd=document.getElementById("name")
let emailCrd=document.getElementById("email")
let addrissCrd=document.getElementById("addriss")
let numberCrd=document.getElementById("number")
let btnCrd=document.getElementById("btn")


function validName(){
    if(!nameCrd.value.match(/\w{4}/) || nameCrd.value==0){
        nameCrd.classList.add("active")
        return false
    }
    else{
        nameCrd.classList.remove("active")
        return true
    }
}
function validNumber(){
    if(!numberCrd.value.match(/\d{10}/) || numberCrd.value==0){
        numberCrd.classList.add("active")
        return false
    }
    else{
        numberCrd.classList.remove("active")
        return true
    }
}
function validEmail(){
    if(!emailCrd.value.match(/\w{4}@\w+.com/) || emailCrd.value==0){
        emailCrd.classList.add("active")
        return false
    }
    else{
        emailCrd.classList.remove("active")
        return true
    }
}
function validAddriss(){
    if(addrissCrd.value.length < 10 || addrissCrd.value==0){
        addrissCrd.classList.add("active")
        return false
    }
    else{
        addrissCrd.classList.remove("active")
        return true
    }
}
function validForm(){
    if(!validName() || !validNumber() || !validAddriss() || !validEmail()){
        return false
    }
    else{
        return true
    }
}