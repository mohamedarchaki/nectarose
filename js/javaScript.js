let link = document.getElementById("link")
let menu = document.getElementById("menu")
let spn = document.getElementsByClassName("span")

menu.onclick = function active(){
    link.classList.toggle("is-active")
    spn[0].classList.toggle("is-active")
    spn[1].classList.toggle("is-active")
    spn[2].classList.toggle("is-active")
}

let nameCnt =document.getElementById("name");
let emailCnt =document.getElementById("email");
let sujetCnt =document.getElementById("sujet");
let messageCnt =document.getElementById("message");
let btnCnt =document.getElementById("btn");

function validName(){
    if(!nameCnt.value.match(/\w{4}/ || nameCnt.value==0)){
        nameCnt.classList.add("active")
        return false
    }
    else{
        nameCnt.classList.remove("active")
        return true
    }
}

function validEmail(){
    if(!emailCnt.value.match(/\w{4}@\w+.\w+/) || emailCnt.value==0){
        emailCnt.classList.add("active");
        return false
    } 
    else{
        emailCnt.classList.remove("active")
        return true
    }
}
function validSujet(){
    if(sujetCnt.value.length < 10 || sujetCnt.value== 0){
        sujetCnt.classList.add("active")
        return false
    }
    else{
        sujetCnt.classList.remove("active")
        return true
    }
}

function validMessage(){
    if(messageCnt.value.length < 30 || messageCnt.value== 0){
        messageCnt.classList.add("active")
    }
    else{
        messageCnt.classList.remove("active")
    }
}

function validForme(){
    if(!validName() || !validEmail()||  !validSujet() || !validMessage() ){
        return false;
    }
    return true
}