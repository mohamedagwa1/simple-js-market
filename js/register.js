let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let registerBtn = document.querySelector("#sign_up");
//////////////////////////////////////////////////////
registerBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(userName.value==="" ||email.value==="" ||password.value==="" ){
        alert("please fill data");
    }else{
        localStorage.setItem("userName", userName.value );
        localStorage.setItem("email", email.value );
        localStorage.setItem("password", password.value );
        setTimeout( () => {
            window.location="login.html"
        },1500 )
    }
})
