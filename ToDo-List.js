//DOM Declarations are spelt here
let $currentDate=document.querySelector(".Today");
let $addtask=document.querySelector(".AddTask");
let $taskList=document.getElementById("TaskList");
let $submit=document.querySelector(".submit");
let input=document.querySelector("#newTask");
let $total=document.querySelector(".total");
let $remaining=document.querySelector(".remaining");
let $done=document.querySelector(".done");
let $clearStorage=document.querySelector(".clear");

let w=0;//this acts as the id
let work=null;
let LIST=[];//used to store the tasks
let dateForToday="";//stores the current day and month
let daysOfTheWeek=["Sunday, ","Monday, ","Tuesday, ","Wednesday, ","Thursday, ","Friday, ","Saturday, "];
let monthsOfTheYear=["January","February","March","April","May","June","July","August","September","October","November","December"];
let today= new Date();//returns today's date
let myDay=today.getDay();//this stores the day as a number
determineDayAndMonth(myDay,daysOfTheWeek); //this returns the day of the week
let date=today.getDate();//returns today's date in number
dateForToday=addSuffix(date);//this add appropriate suffix to the date 
month=today.getMonth();//stores the current month as a number
determineDayAndMonth(month,monthsOfTheYear);//returns the current month
$currentDate.innerText=dateForToday;
function addSuffix(date){//this function adds appropriate suffix to the date e.g 27th,21st e.t.c
    if(date%10===1){
        date=String(date)+"st ";
    }
    else if(date%10===2){
        date=String(date)+"nd ";
    }
    else if(date%10===3){
        date=String(date)+"rd ";
    } 
    else{
        date=String(date)+"th ";
    }
    dateForToday+=date;
    return dateForToday;
}//closes the function
function determineDayAndMonth(x,y){//this function the particular day as well as the month
    for(i=0;i<y.length;i++){
        if(i===x){
        return   dateForToday+=y[i];
        }
    }
}

if(localStorage){
    if(localStorage.length>=1){//checks if anything is stored in the local storage
    for(q=0;q<localStorage.length;q++){
        work=JSON.parse(localStorage.getItem(q));//retrieve the tasks on the local storage
        LIST.push(work);
        task=work.title;
        addtoDo(task,q);//this adds the tasks to the the task list
        $total.innerText=$list.length;//returns the total task list 
    }
    
    w=q;
    }
}
$addtask.addEventListener("click",function(){//this determines what happes when the plus button is clicked
    input.style.opacity="1";
    input.style.display="inline";
    $addtask.style.display="none";
    $submit.style.display="inline";
});
input.addEventListener('focus',function(){
    event.preventDefault();
    input.style.border="solid blue";
})
$submit.addEventListener("click",addNewTask);

input.addEventListener('keypress',addNewTask);

function addNewTask(){
    if(event.key==="Enter" || event.target.className==="submit"){//this function add a new task to the task list
        task=input.value;
        if(task){
                $addtask.style.display="inline";
                $submit.style.display="none";
                input.style.opacity="0";
                input.style.display="none";
                work={title:task,complete:false,id:w,delete:false};
                LIST.push(work);
                localStorage.setItem(JSON.stringify(w),JSON.stringify(work));
                addtoDo(task,w);
                w++;
        }
        $total.innerText=$list.length;
        input.value="";        
    }
}
function addtoDo(task,w){
    const words=`<div class="list" >
                    <span class="ring" id="${w}"></span>
                    <div class="task">${task}</div>
                      <div class="log1"></div><div class="log2"></div>
                    <br>
                </div>`
    $taskList.insertAdjacentHTML("beforeend",words);
    $list=document.getElementsByClassName("list");//stores an array like collection the of node for each task 
    if(localStorage.length>0){
                if(work.complete){
                        $taskList.lastChild.firstElementChild.style.background="green";
                        $taskList.lastChild.firstElementChild.parentNode.children[1].style.textDecoration="line-through";
                        $taskList.lastChild.firstElementChild.parentNode.children[1].style.opacity="0.2"; 
                }
                if(work.delete){
                        for(t=0;t<LIST.length;t++){
                            if($list[t].firstElementChild.id==work.id){
                                        $taskList.removeChild($list[t]);
                                        break;
                            }
                        }
                 }
                 completed=0;
                 uncompleted=0;
                 for(d=0;d<$list.length;d++){
                     for(r=0;r<LIST.length;r++){
                         if($list[d].firstElementChild.id==LIST[r].id && LIST[r].complete){
                             completed+=1;
                         }
                         else if($list[d].firstElementChild.id==LIST[r].id && LIST[r].complete==false){
                             uncompleted+=1;
                         }
                     }
                 }
                 $done.innerText=completed;
                 $remaining.innerText=uncompleted;
    }
    $taskList.addEventListener("click",clickButton); 
};
function clickButton(event){//this function determines what happen when a button is clicked 
    if(event.target.className=="ring"){
        for(k=0;k<LIST.length;k++){
            myItem=JSON.parse(localStorage[k]);
            if(LIST[k].id==event.target.id && LIST[k].complete===false && LIST[k].delete===false){
                    event.target.style.background="green";
                    event.target.parentNode.children[1].style.textDecoration="line-through";
                    event.target.parentNode.children[1].style.opacity="0.2"; 
                    LIST[k].complete=true;
                    myItem.complete=true;
                    localStorage[k]=JSON.stringify(myItem);
            }
            else if(LIST[k].id==event.target.id && LIST[k].complete && LIST[k].delete===false){
                    event.target.style.background="white";
                    event.target.parentNode.children[1].style.textDecoration="none";
                    event.target.parentNode.children[1].style.opacity="1";
                    LIST[k].complete=false;
                    myItem.complete=false;
                    localStorage[k]=JSON.stringify(myItem);
            }   
        }
    } 
    else if(event.target.className=="log1" || event.target.className=="log2"){
        for(s=0;s<LIST.length;s++){
            Item=JSON.parse(localStorage[s]);
            if(LIST[s].id==event.target.parentNode.children[0].id && LIST[s].title.trim()===event.target.parentNode.innerText.trim()){
                LIST[s].delete=true;
                Item.delete=true;
                localStorage[s]=JSON.stringify(Item);
                break;
            }
        }
        $taskList.removeChild(event.target.parentNode);
        $total.innerText=$list.length;
    }
    completed=0;
    uncompleted=0;
    for(d=0;d<$list.length;d++){
        for(r=0;r<LIST.length;r++){
            if($list[d].firstElementChild.id==LIST[r].id && LIST[r].complete){
                completed+=1;
            }
            else if($list[d].firstElementChild.id==LIST[r].id && LIST[r].complete==false){
                uncompleted+=1;
            }
        }
    }
    $done.innerText=completed;//this returns the number of  tasks completed
    $remaining.innerText=uncompleted;//returns the number of uncompleted
}

$clearStorage.addEventListener("click",function(){//this clears the local storage
   // $clearStorage.style.transform="rotateZ(270deg)";
    for(z=0;z<LIST.length;z++){
        $taskList.removeChild($list[0]);
    }
    completed=0;
    uncompleted=0;
    $done.innerText=0;
    $total.innerText=0;
    $remaining.innerText=0;
    localStorage.clear();
    LIST=[];
    w=0;

})
