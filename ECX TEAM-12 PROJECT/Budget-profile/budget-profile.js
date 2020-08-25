const toggleBtn=document.querySelector(".toggle-btn");
const toggleBar1=document.querySelector(".toggle-bar-1");
const toggleBar2=document.querySelector(".toggle-bar-2");
const toggleBar3=document.querySelector(".toggle-bar-3");
const mainNav=document.querySelector(".main-nav");
const pencil_Icon=document.querySelectorAll(".fa-pencil-alt");
const add_new_expense=document.querySelectorAll("#update-expense");
const plus_icon=document.querySelectorAll(".fa-plus");
let itemList=document.getElementsByClassName("item");
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

for(let k=0;k<pencil_Icon.length;k++){
    pencil_Icon[k].addEventListener('click',()=>{
    add_new_expense[k].style.opacity="1";
    plus_icon[k].style.opacity="1";
    })
}
for(let j=0;j<plus_icon.length;j++){
    plus_icon[j].addEventListener('click',()=>{
        add_new_expense[j].style.opacity="0";
        plus_icon[j].style.opacity="0";
        })
}
    for(i=0;i<itemList.length;i++){
    item_budget=itemList[i].children[1].children[0].textContent;
    item_expenses=itemList[i].children[1].children[1].textContent;
    item_budget=item_budget.split("");
    item_expenses=item_expenses.split("");
    removed_Currency=item_budget.shift();
    removed_Currency=item_expenses.shift();   
    item_expenses=Number(item_expenses.join(""));
    item_budget=Number(item_budget.join(""));
    progress=(item_expenses*100)/item_budget;
    progress=Math.round(progress);
    progressBar=itemList[i].children[0].children[1].children[0];
    progressBar.style.width=progress+"%";
    itemList[i].children[0].children[2].textContent=progress+"%";
    }

