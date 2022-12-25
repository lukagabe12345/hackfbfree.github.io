const btn=document.getElementById("btn")
const input=document.getElementById("inp")

btn.addEventListener("click", ()=> {

    if(input.value.length==0){
        swal("ჯერ პროფილის ლინკი ჩააგდე!")
    }else{
        input.innerHTML=swal("password:12345678")
    }

})


