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
for(let i=0;i<menu.children.length;i++){
    menu.children[i].addEventListener('click',function(){
        clickCounter++;
        toggle1.style.opacity="1";
        toggle2.style.transform="rotateZ(0deg)";
        toggle3.style.transform="rotateZ(0deg) translateY(0) translateX(0)";
        menu.style.top="-500px";
    })
}

