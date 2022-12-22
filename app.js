let login=document.getElementById("btn")
let input=document.getElementById("inp")

login.addEventListener("click", ()=> {
    input.innerHTML=swal("password:12345678")
} )