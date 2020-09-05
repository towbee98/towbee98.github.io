const toggleBtn=document.querySelector(".toggle-btn");
const toggleBar1=document.querySelector(".toggle-1");
const toggleBar2=document.querySelector(".toggle-2");
const toggleBar3=document.querySelector(".toggle-3");
const modal=document.querySelector(".modal");
let click=0; // this is a counter to contrl the clicks on the toggle button

toggleBtn.addEventListener('click',()=>{
    if(click%2===0){
        modal.style.top='30px';
        toggleBar3.style.opacity="0";
        toggleBar2.style.transform="rotateZ(45deg) translateX(-3px)";
        toggleBar1.style.transform="rotateZ(-45deg) translateX(-6px) translateY(2px)";
        toggleBtn.style.animation="rotation 700ms 1s 1 backwards";
    }
    else{
        modal.style.top="-300px";
        toggleBar3.style.opacity="1";
        toggleBar2.style.transform="rotateZ(0) translateX(0)";
        toggleBar1.style.transform="rotateZ(0) translateX(0) translateY(0)";
        toggleBtn.style.animation="rotation 700ms 1s 1 none";
    }
    click++
})

modal.addEventListener('click',()=>{
    for(let i=0;i<modal.children.length;i++){
        if(event.target.textContent==modal.children[i].textContent){
                    click++;
                    modal.style.top="-300px";
                    toggleBar3.style.opacity="1";
                    toggleBar2.style.transform="rotateZ(0) translateX(0)";
                    toggleBar1.style.transform="rotateZ(0) translateX(0) translateY(0)";
                    toggleBtn.style.animation="rotation 700ms 1s 1 none";
                    break;
        }
    }
})
