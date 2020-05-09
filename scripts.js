//Welcomer the user
alert("Welcome  to Sabi Naija Quiz naija!!!");

var quiz={
    description:"how much do you know about naija?",
    question:[
    "what is the name of the current president of the nigeria football federation ?",
    "how many local governments are in Nigeria?",
    "Nigeria became a republic in which year?",
    "The first capital of Nigeria before lagos was______",
    "Where in nigeria is the yankari game reserve located",
    "Which of the following is  not a bridge across the lagos lagoon?",
    "Which of these languages is spoken in Delta State?",
    "Blue in the Nigeria Police flag represents",
    "Nigeria won its first African nations cup in which year?",
    "When was paper currency introduced in Nigeria?"
    ]
};
var options=[["Amaju Pinnick","Sani lulu","Femi Adeshina"],
    ["779","568","774"],
    ["1977","1960","1963"],
    ["kaduna","calabar","Port-Harcourt"],
    ["Sokoto State","Benue State","Bauchi State"],
    ["Carter Bridge","Third Mainland Bridge","Ikeja Bridge"],
    ["Birom","Isoko","Nupe"],
    ["securing lives and properties","peace and Strength","love,loyalty and Unity"],
    ["1989","1980","1984"],
    ["1945","1918","1928"]
];
var answers=["Amaju Pinnick","774","1963","calabar","Bauchi State",
"Ikeja Bridge","Isoko","love,loyalty and Unity","1984","1918"];
var i=0;
var score=0;
var click=0;
count=0;
optionsArr=[];

function checker(){
    check=[];
    while(check.length!=5){
    x=Math.floor(Math.random()*10);
    if(check.includes(x)===false && check.length <5 ){
        check.push(x);
    }
    else{
        continue;
    }
   
}
return check;
}


//DOM REFERENCES
var $question= document.querySelector("#question");
var $score=document.querySelector("#score");
var $start=document.querySelector("#start");
var $optionA=document.querySelector("#option1");
var $optionB=document.querySelector("#option2");
var $optionC=document.querySelector("#option3");
var $options= document.querySelector("#options");

alert(quiz.description);

checkit=checker();

$start.addEventListener("click",playgame);

function playgame(event,quiz){
    $optionA.style["background"]="blue";
    $optionB.style["background"]="blue";
    $optionC.style["background"]="blue";
    $start.style["display"]="none";
    play(quiz);
}

function update(element,content,klass){
    var p=element.firstChild || document.createElement("p");
    p.textContent=content;
    element.appendChild(p);
    if(klass){
        p.className= klass;
    };
};

function play(quiz){  

if(i<5){
    b=checkit[i];
    question(b);//get the answer from the user
    answer();
    optionsArr=[];
}
else{
    gameOver();
}
i++;
};


//this function asks question
function question(b){
    update($question,quiz.question[b]);
    $optionA.innerHTML=options[b][0];
    optionsArr.push( $optionA.innerHTML);
    $optionA.style["display"]="block";
    $optionB.innerHTML=options[b][1];
    optionsArr.push( $optionB.innerHTML);
    $optionB.style["display"]="block";
    $optionC.innerHTML=options[b][2];
    optionsArr.push( $optionC.innerHTML);
    console.log(optionsArr);
    $optionC.style["display"]="block";
     console.log(answers.includes(optionsArr[0]));
}

function callbackA(clicker){  
     for(p=0;p<optionsArr.length;p++){
            if(answers.includes(optionsArr[0])){
                $optionA.style["background-color"]="green";
             }
            else if(answers.includes(optionsArr[1])){
                $optionB.style["background"]="green";    
            }
            else if(answers.includes(optionsArr[2])){
                $optionC.style["background-color"]="green";
             }
        }
    if(answers.includes(clicker)===true){
        event.target.style["background-color"]="green";
        score++;
        update($score,score);
        console.log(score);
        }
    else{
        event.target.style["background-color"]="red";
    }
       
     
    count++;
    update($start,"Next");
    $start.style["display"]="block";

    }
//this function checks the answer
function answer() {
   $options.addEventListener("click",clicked);
   function clicked(){
       if(event.target.tagName==="LI"){
           clicker=event.target.innerHTML;
           callbackA(clicker);
       }
       $options.removeEventListener("click",clicked);
   }
}


//this function counts the scores
function gameOver(){
    update($question,"Game Over you scored "+ score +"/5");
    $optionA.style["display"]="none";
    $optionB.style["display"]="none";
    $optionC.style["display"]="none";
    $start.style["display"]="none";
}

