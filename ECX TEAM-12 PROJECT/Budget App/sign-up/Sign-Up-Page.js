const toggleBtn=document.querySelector(".toggle-btn");
const toggleBar1=document.querySelector(".toggle-bar-1");
const toggleBar2=document.querySelector(".toggle-bar-2");
const toggleBar3=document.querySelector(".toggle-bar-3");
const mainNav=document.querySelector(".main-nav");
let form = document.forms[0];
let enteredUsername=document.forms[0][0];
let enteredFullname=document.forms[0][1];
let enteredPassword=document.forms[0][3];
let enteredEmail=document.forms[0][2];
const signUpBtn=document.forms[0][4];
const signUpMessage=document.querySelector(".sign-up-message");
const loginLink=document.querySelector(".login-link");
const loader=document.querySelector(".loader");
let click=0;//counter for the toggle btn
let msg;
toggleBtn.addEventListener('click',function(){//this controls what happens when the toggle button is clicked
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
  let  user=enteredUsername.value;    //assign each
  let  password=enteredPassword.value;// of the
  let  fullName=enteredFullname.value;//user inputs
  let  email=enteredEmail.value;      //to a variable
    event.preventDefault();     //this prevents the form from submitting
    if(user &&  password && fullName && email){
        let params={//this stores the user details in an object
            username:user,
            password:password,
            fullName:fullName,
            email:email
        };
        const url='https://budgetify20.herokuapp.com/api/user';//this is the api link
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
    } 
    enteredUsername.value="";
    enteredPassword.value="";
    enteredFullname.value="";
    enteredEmail.value=""; 
})
function makeApiCall(url,params){
        const myheaders=new Headers({
            'Accept':'application/JSON',
            'Content-Type':'application/JSON'
        });
        const request= new Request(url,{
            method:'POST',
            headers:myheaders,
            body:JSON.stringify(params)
        });
        console.log(request);
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
                signUpMessage.textContent=msg;
                signUpMessage.style.display="block";
                loginLink.style.display="block";
            })
            .catch(error =>console.log(` error occured : ${error}`))
}
signUpMessage.style.display="block";

