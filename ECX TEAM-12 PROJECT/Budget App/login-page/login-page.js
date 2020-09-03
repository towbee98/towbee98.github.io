const toggleBtn=document.querySelector(".toggle-btn");
const toggleBar1=document.querySelector(".toggle-bar-1");
const toggleBar2=document.querySelector(".toggle-bar-2");
const toggleBar3=document.querySelector(".toggle-bar-3");
const mainNav=document.querySelector(".main-nav");
const enteredUsername=document.forms[0][0];
const enteredpassword=document.forms[0][1];
const submitBtn=document.forms[0][2];
const rememberMeBtn=document.forms[0][3];
const forgotPassword=document.forms[0][4];
const loginMessage=document.querySelector(".login-message");

let click=0;
let msg;
toggleBtn.addEventListener('click',function(){
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
submitBtn.addEventListener('click',function(){//this controls what happens when the sign up button is clicked
    let user=enteredUsername.value;
    let password=enteredpassword.value
    event.preventDefault();
    if(user&& password){
        console.log("true");
        let params={
            username:user,
            password:password,
        };
        const url=`https://budgetify20.herokuapp.com/api/login`;
        $.ajax({
            type:"POST",
            url:url,
            dataType:"json",

            beforeSend:function(){//this 
                $(".loader").show();
            },

            complete:function(){
                $(".loader").hide();
            }
            
        })
        makeApiCall(url,params);
        enteredUsername.value="";
        enteredpassword.value="";
    } 
})
function makeApiCall(url,params){
    const data=JSON.stringify(params);
    const headers=new Headers({
        'Accept':'application/json',
        'Content-Type':'application/json'
    });
    const request= new Request(url,{
        method:'POST',
        headers:headers,
        body:data
    })
    fetch(request)
        .then((response)=>{
            if(response.ok){
                return response.json();
            }
            else{
                return Promise.reject(response);
            }
        })
        .then((response)=>console.log(msg=Object.values(response)[0]))
        .then(()=>{
            loginMessage.textContent=msg;
            loginMessage.style.display="block";
        })
        .then(()=>{
                if(loginMessage.textContent=="You are logged in."){
                    localStorage.setItem('username',user);
                    localStorage.setItem('password',password);
                window.location="/ECX TEAM-12 PROJECT/Budget App/User-Profile/";
                }
        })
        .catch(error =>{
            console.log(` error occured : ${error}`);
            loginMessage.textContent="An error occured";
        })        
}
