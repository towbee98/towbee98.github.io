//list of DOM variables
let userInput=document.querySelector(".user-input");
let conversion=document.querySelectorAll(".type");
let convertBtn=document.getElementById("Convert");
let result=document.querySelector('.result');
let errorMessage=document.querySelector(".error-message");
console.log(convertBtn);
let numberOfPeriod=0;
convertBtn.addEventListener('click',function(){
       if(conversion[0].checked && userInput.value){
           input=userInput.value;
            pattern=/^[0-1]+$/;
            console.log(pattern.test(input));
            if(pattern.test(input)){
                    binaryNumber=true;
                    answer=parseInt(input,2);
                    console.log(answer);
                    result.innerText="Answer : "+answer;
                    result.style.display="block";
                    errorMessage.style.display="none";    
            }
           else{
               errorMessage.style.display="block";
               result.style.display="none";
           }
        }
        else if(conversion[1].checked && userInput.value){
            input=userInput.value;
            console.log(input);
            pattern=/^[0-9]+$/g;
            if(pattern.test(input)){
                let changedToNumber=Number(input);
                answerArray=[];
                while(changedToNumber !=0){
                    answerArray.unshift(changedToNumber%2);
                    changedToNumber=parseInt(changedToNumber/2);
                }
                answerArray=answerArray.join('');
                result.innerText="Answer : "+answerArray;
                result.style.display="block";
                errorMessage.style.display="none";
            }
            else{
                errorMessage.style.display="block";
                result.style.display=none;
            }
        }   
})



