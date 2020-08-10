const loginForm=document.forms[0];
const registerForm=document.forms[1];
const loginBtn=document.querySelector(".Sign-in");
loginBtn.addEventListener("click",function(event){
    if(event.target.textContent=="Sign in"){
        loginForm.style.right="10px";
        loginForm.style.opacity="1";
        registerForm.style.right="-200px";
        registerForm.style.opacity="0";
    }
    else if(event.target.textContent=="Sign up"){
        loginForm.style.right="-200px";
        loginForm.style.opacity="0";
        registerForm.style.opacity="1";
        registerForm.style.right="10px";
    }
})