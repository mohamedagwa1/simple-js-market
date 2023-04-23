let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");
//////////////////////////
let getUserName = localStorage.getItem("userName");
let getPassword = localStorage.getItem("password");
////////////////////
loginBtn.addEventListener( "click", function(e){
    e.preventDefault()
    if(userName.value===""||password.value===""){
        alert("please fill boxes");
    }else{
        if(getUserName && getUserName.trim() ===userName.value.trim() && getPassword && getPassword.trim() ===password.value.trim() ){
            setTimeout( ()=>{
                window.location="index.html"
            },1000)
        }else{
            alert("يا نجم انت نصاب")
        }
    }
}
)
/////////////////////////
