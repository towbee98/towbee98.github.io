const toggleBtn=document.querySelector(".toggle-btn");
const toggleBar1=document.querySelector(".toggle-bar-1");
const toggleBar2=document.querySelector(".toggle-bar-2");
const toggleBar3=document.querySelector(".toggle-bar-3");
const mainNav=document.querySelector(".main-nav");
let form = document.forms[0];
let enteredUserName=document.forms[0][0].value;
let enteredFullname=document.forms[0][1].value;
let enteredPassword=document.forms[0][3].value;
let enteredEmail=document.forms[0][2].value;
const signUpBtn=document.forms[0][4];
const successLogin=document.querySelector(".Successful-login");
const unsuccessLogin=document.querySelector(".Unsuccessful-login");
let click=0;//counter for the toggle btn
toggleBtn.addEventListener('click',function(){//this controls what happens when the button is clicked
    if(click%2==0){
        mainNav.style.left="0";
        toggleBar1.style.opacity="0";
        toggleBar2.style.transform="rotateZ(45deg) translateX(6px)";
        toggleBar3.style.transform="rotateZ(-45deg) translateX(4px) translateY(2px)";
    }
    else{
        mainNav.style.left="-300px";
        toggleBar1.style.opacity="1";
        toggleBar2.style.transform="rotateZ(0) translateX(0)";
        toggleBar3.style.transform="rotateZ(0) translateX(0) translateY(0)";
    }
    click++
})
mainNav.addEventListener('click',function(){
    for(let i=0;i<mainNav.children.length;i++){
        if(event.target.textContent==mainNav.children[i].textContent){
                    click++;
                    mainNav.style.left="-300px";
                    toggleBar1.style.opacity="1";
                    toggleBar2.style.transform="rotateZ(0) translateX(0)";
                    toggleBar3.style.transform="rotateZ(0) translateX(0) translateY(0)";
                    break;
        }
    }
})
signUpBtn.addEventListener('click',function(){//this controls what happens when the sign up button is clicked
    //event.preventDefault();
    if(enteredUserName &&  enteredPassword && enteredFullname && enteredEmail){
        let params={user:enteredUserName,password:enteredPassword,fullname:enteredFullname};
        const url=`https://budgetify20.herokuapp.com/api/user`;
        makeApiCall(url,params);
    } 
    enteredUserName="";
    enteredPassword="";
    enteredFullname="";
    enteredEmail="";
  
    
})

    function makeApiCall(url,params){
        let xhr=new XMLHttpRequest();
        console.log(xhr.readyState);
        xhr.onreadystatechange=() =>{
            if(xhr.readyState===4 && xhr.status===200){
                console.log(xhr.responseText);
                response=JSON.parse(xhr.response);  
                successLogin.innerHTML=response;  
            }
            else
                console.log("loading");
        }
        xhr.open("POST",url,true);
        xhr.send(JSON.stringify(params));
    }
    