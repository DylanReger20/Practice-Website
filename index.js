function clicked() {
    document.title = document.querySelector("input").value;
}
function local(){
    let x = JSON.parse(localStorage.getItem("local"))+1;
    localStorage.setItem("local",x);
    document.querySelector("#local").innerHTML=x;
}
function session(){
    let x = JSON.parse(sessionStorage.getItem("session"))+1;
    sessionStorage.setItem("session",x);
    document.querySelector("#session").innerHTML=x;
}
function update(){
    if(!localStorage.getItem("local")){
        localStorage.setItem("local",0);
    }
    if(!sessionStorage.getItem("session")){
        sessionStorage.setItem("session",0);
    }
    document.querySelector("#session").innerHTML=sessionStorage.getItem("session");
    document.querySelector("#local").innerHTML=localStorage.getItem("local");
}