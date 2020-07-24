//DOM VARIABLE NAMES
$switch=document.querySelector('.switch');
$values=document.querySelector('.values');
$number=document.querySelectorAll(".number");
$operator=document.querySelectorAll(".operator");
$equals=document.querySelector(".equal");
$decimal=document.querySelector(".document");
$clear=document.querySelector(".clear");
$mrc=document.querySelector(".mrc");
$mPositive=document.querySelector(".mPositive");
$mNegative=document.querySelector(".mNegative");
console.log($operator);
switchCounter=0;
numberIsClicked=false;
operatorIsClicked=false;
numberOfOperand=0;
equalsToIsClicked=false;
numberChecker=0;
myoperator="";
num1=null;
num2=0;
$switch.addEventListener("click",handler);
$clear.addEventListener("click",clearMemory);

//this swicthes on and off the calculator
function handler(){
    switchCounter++;
    if(switchCounter%2===1 && $values.innerText.length<8){
        $values.style.display="block";
            for(j=0;j<=10;j++){
                $number[j].addEventListener("click",numberSelect);
            }
            for(m=0;m<=3;m++){
                $operator[m].addEventListener("click",operation);
            }
            $equals.addEventListener("click",showAnswer);
            $mPositive.addEventListener("click",storeToMemory);
            $mNegative.addEventListener("click",removeFromMemory);
            $mrc.addEventListener("click",storedMemory);
        }
    else{
    $values.style.display="none";
    $values.innerText=0;
    numberIsClicked=false;
    operatorIsClicked=false;
    numberOfOperand=0;
    equalsToIsClicked=false;
    myoperator="";
    }
}
//this function clears the memory of the calculator
function clearMemory(){
    $values.innerText=0;
    numberIsClicked=false;
    operatorIsClicked=false;
    equalsToIsClicked=false;
    myoperator="";
    numberOfOperand=0;
}
function storeToMemory(){
    num2+=Number($values.innerText);
}
function removeFromMemory(){
    num2-=Number($values.innerText);
}
function storedMemory(){
    $values.innerText=num2;
}
//this  function stores the  operator  clicked
function operation(){
    if(switchCounter%2===1){
        operatorIsClicked=true;
        myoperator=event.target.innerText;
        console.log(myoperator);
    } 
}
//this function calculates and shows the answer
function showAnswer(){
    equalsToIsClicked=true;
    numberIsClicked=true;
    numberOfOperand=1;
     if(numberIsClicked && operatorIsClicked && numberOfOperand===1 && equalsToIsClicked===true){
         switch(myoperator){
            case "*":
                num1*=(Number($values.innerText));
                $values.innerText=num1;
               if($values.innerText.length>8){
                   $values.innerText=num1.toPrecision(3);
                   throw "the number of digits exceeded";
                   
               }
               break;
            case "+":
                num1+=(Number($values.innerText));
                $values.innerText=num1;
                if($values.innerText.length>8){
                    $values.innerText=num1.toPrecision(3);
                  throw "the number of digits exceeded";
                }
                break;
            case "-":
                num1-=(Number($values.innerText));
                $values.innerText=num1;
                if($values.innerText.length>8){
                    $values.innerText=num1.toPrecision(2);
                   throw "the number of digits exceeded";
                }
                break;
            case "/":
                num1/=(Number($values.innerText));
                $values.innerText=num1;
                if($values.innerText.length>8){
                    $values.innerText=num1.toPrecision(3);
                    throw "the number of digits exceeded";
                }
            break;

         }
    }
    numberIsClicked=false;
    operatorIsClicked=false;
    equalsToIsClicked=false;
    numberOfOperand=0;
    numberChecker=0;

}
function numberSelect(){
    if($values.innerText.length<=8 && switchCounter%2===1){
        if(numberIsClicked===false && operatorIsClicked===false && numberOfOperand===0 && equalsToIsClicked===false){
            console.log("if-stmt 1");
            $values.innerText=event.target.innerText;
            numberIsClicked=true;
        }
        else if(numberIsClicked && operatorIsClicked===false && numberOfOperand===0 && equalsToIsClicked===false ){
            console.log("if stmt 2");
            $values.innerText+=event.target.innerText;
        }
        else if(numberIsClicked && operatorIsClicked && numberOfOperand===0 && equalsToIsClicked===false ){
            num1=$values.innerText*1;
            console.log("if stmt 3");
            numberOfOperand=1;
            $values.innerText=event.target.innerText;
        }
        else if(numberIsClicked && operatorIsClicked && numberOfOperand===1 && equalsToIsClicked===false ){
            $values.innerText+=event.target.innerText;
            console.log("if stmt 4");
        }
        else if(numberIsClicked===false && operatorIsClicked && numberOfOperand===0 && equalsToIsClicked===false){
            switch(numberChecker){
                case 0:
                    $values.innerText=event.target.innerText;
                    numberChecker=1;
                    break;
                default:
                    $values.innerText+=event.target.innerText;
                    break;

            }
           
        }   
    }
}

