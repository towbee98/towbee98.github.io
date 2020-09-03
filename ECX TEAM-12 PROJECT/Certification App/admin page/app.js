const toggleBtn=document.querySelector(".toggle-btn");
const toggleBar1=document.querySelector(".toggle-1");
const toggleBar2=document.querySelector(".toggle-2");
const toggleBar3=document.querySelector(".toggle-3");
const modal=document.querySelector(".modal");
const file=document.forms[0][0];
const password=document.forms[0][1];
const submit=document.forms[0][2];
const filename=document.querySelector(".file-details");
const message=document.querySelector(".message");
const fileType=["/csv"];
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
file.addEventListener('change',function(){
    if(fileType.includes(file.files[0].type)){
        filename.textContent=file.files[0].name;
    }
    else{
        setTimeout(()=>{
            message.textContent="sorry this is not a csv file";
            message.style.color="red";
            message.style.fontWeight="bold";
        },1000)
    }
})

