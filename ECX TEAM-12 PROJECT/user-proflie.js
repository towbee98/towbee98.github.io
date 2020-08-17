const toggleBtn=document.querySelector(".toggle-btn");
const toggleBar1=document.querySelector(".toggle-bar-1");
const toggleBar2=document.querySelector(".toggle-bar-2");
const toggleBar3=document.querySelector(".toggle-bar-3");
const mainNav=document.querySelector(".main-nav");
const create_Budget_Btn=document.querySelector(".Create-Budget");
const view_Budget_Btn= document.querySelector(".View-Budget");
const cancel_Btn= document.querySelector("#cancel");
const save_Btn=document.querySelector("#save");
const backdrop=document.querySelector(".backdrop");
const new_Budget_form=document.querySelector(".new-budget-container");
const cancel_toggle_bar=document.querySelector(".cancel-btn");
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
create_Budget_Btn.addEventListener('click',() =>{
    new_Budget_form.style.display="block";
    backdrop.style.display="block";
})
cancel_toggle_bar.addEventListener('click',()=>{
    new_Budget_form.style.display="none";
    backdrop.style.display="none";
})