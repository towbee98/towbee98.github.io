const toggleBtn=document.querySelector(".toggle-btn");
const toggleBar1=document.querySelector(".toggle-bar-1");
const toggleBar2=document.querySelector(".toggle-bar-2");
const toggleBar3=document.querySelector(".toggle-bar-3");
const mainNav=document.querySelector(".main-nav");
const inputField=document.querySelectorAll(".input-field");
const form=document.forms[0];

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
mainNav.addEventListener('click',()=>{
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
/*for(let i=0;i<inputField.length;i++){
    inputField[i].addEventListener('click',()=>{
        inputField[i].children[0].style.top="0";
        inputField[i].children[0].style.fontSize="8px";
        inputField[i].children[1].style.zIndex="100";
    })
}
for(let j=0;j<inputField.length;j++){
    if(inputField[j].children[1].value){
        inputField[j].children[1].addEventListener('change',()=>{
            inputField[j].children[0].style.top="0";
            inputField[j].children[0].style.fontSize="9px";
            inputField[j].children[1]. style.zIndex="100";  
            })
    }
    else{
            inputField[j].children[1].addEventListener('blur',()=>{
                inputField[j].children[0].style.top="20px";
                inputField[j].children[0].style.fontSize="12px";
                inputField[j].children[1].style.zIndex="0";  
               })
    }
    inputField[j].children[1].value="";
}*/
