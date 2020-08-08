const form=document.forms[0];
let inputLogin=form[0];
let inputPassword=form[1];
const submit=form[2];
const successMsg=document.querySelector(".success");
const errorMsg=document.querySelector(".error-message");
const menu=document.querySelector(".menu");
const toggleBtn=document.querySelector(".toggle-bar");
const toggle1=document.querySelector(".toggle-bar div:first-child");
const toggle2=document.querySelector(".toggle-bar div:nth-child(2)");
const toggle3=document.querySelector(".toggle-bar div:last-child");
let clickCounter=0;
toggleBtn.addEventListener("click",function(){
    clickCounter++;
    if(clickCounter%2===1){
        toggle1.style.opacity="0";
        toggle2.style.transform="rotateZ(45deg)";
        toggle3.style.transform="rotateZ(135deg) translateY(2px) translateX(1px)";
        menu.style.top="2px";
    }
    else{
        toggle1.style.opacity="1";
        toggle2.style.transform="rotateZ(0deg)";
        toggle3.style.transform="rotateZ(0deg) translateY(0) translateX(0)";
        menu.style.top="-500px";
    }
})
const admin1={
    login:"administrator",
    password:"team-20"
}
submit.addEventListener('click',function(){
    event.preventDefault();
    if(inputLogin.value==admin1.login && inputPassword.value==admin1.password){
        inputLogin.value="";
        inputPassword.value="";
        successMsg.style.opacity="1";
        errorMsg.style.opacity="0";
    }
    else{
        inputLogin.value="";
        inputPassword.value="";
        errorMsg.style.opacity="1";
        successMsg.style.opacity="0";
    }
    setTimeout(() => {
        errorMsg.style.opacity="0";
        successMsg.style.opacity="0";
    },2000);   
}
);

