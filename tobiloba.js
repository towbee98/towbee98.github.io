$dropdown=document.querySelector(".dropdown");
$toggleBtn=document.querySelector(".toggle-btn");
$backdrop=document.querySelector(".backdrop");
$dropbtn=document.querySelectorAll(".dropdown a");
form=document.forms["contact form"];
labelForName=document.querySelector(".fullName");
fullName=form.elements[0];
email=form.elements[1];
message=form.elements[2];
submit=form.elements[3];
clicks=0;
clickedDropdownOptions=false;
$toggleBtn.addEventListener("click",toggleBtnHandler);
function toggleBtnHandler(){
    clicks++;
    if(clicks%2===1){
        $dropdown.style["opacity"]="1";
        $dropdown.style["transform"]="translateX(0rem)";
        $backdrop.style["opacity"]="0.7";
        $backdrop.style["z-index"]="2";
        for(i=0;i<$dropbtn.length;i++){
            $dropbtn[i].addEventListener("click",dropbtnHandler);
        }
    }
    else{
        $dropdown.style["opacity"]="0";
    $dropdown.style["transform"]="translateX(20rem)";
    $backdrop.style["opacity"]="0";
    $backdrop.style["z-index"]="-1";
    }
    
}
function dropbtnHandler(){
    clickedDropdownOptions=true;
    if(clickedDropdownOptions){ 
    $dropdown.style["opacity"]="0";
    $dropdown.style["transform"]="translateX(20rem)";
    $backdrop.style["opacity"]="0";
    $backdrop.style["z-index"]="-1";
    clicks++;
    clickedDropdownOptions=false;
    }
}

form.addEventListener("submit",createMessage);
function createMessage(){
event.preventDefault();
formRequest={};
formRequest.name=fullName.value;
formRequest.email=email.value;
formRequest.message=message.value;
console.log(JSON.stringify(formRequest));
form.reset();
}
