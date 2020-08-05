const $dropdown=document.querySelector(".dropdown");
const $toggleBtn=document.querySelector(".toggle-btn");
const $backdrop=document.querySelector(".backdrop");
const $dropbtn=document.querySelectorAll(".dropdown a");
const $toggle1=document.querySelector(".toggle1");
const $toggle2=document.querySelector(".toggle2");
const $toggle3=document.querySelector(".toggle3");
const form=document.forms["contact form"];
const aboutMe=document.querySelector(".Heading");
let labelForName=document.querySelector(".fullName");
let fullName=form.elements[0];
let email=form.elements[1];
let message=form.elements[2];
let submit=form.elements[3];
let clicks=0;
let clickedDropdownOptions=false;
aboutMe.style.left="0";
$toggleBtn.addEventListener("click",toggleBtnHandler);
function toggleBtnHandler(){
    clicks++;
    if(clicks%2===1){
        $dropdown.style["opacity"]="1";
        $dropdown.style["transform"]="translateX(0rem)";
        $backdrop.style["opacity"]="0.7";
        $backdrop.style["z-index"]="2";
        $toggle1.style.opacity="0";
        $toggle2.style.transform="rotateZ(45deg)";
        $toggle2.style.transformOrigin="3px";
        $toggle3.style.transform="rotateZ(135deg)";
        for(i=0;i<$dropbtn.length;i++){
            $dropbtn[i].addEventListener("click",dropbtnHandler);
        }
    }
    else{
        $dropdown.style["opacity"]="0";
    $dropdown.style["transform"]="translateX(20rem)";
    $backdrop.style["opacity"]="0";
    $backdrop.style["z-index"]="-1";
    $toggle1.style.opacity="1";
    $toggle2.style.transform="rotateZ(0deg)";
    $toggle2.style.transformOrigin="0";
    $toggle3.style.transform="rotateZ(0deg)";
    }
    
}
function dropbtnHandler(){
    clickedDropdownOptions=true;
    if(clickedDropdownOptions){ 
    $dropdown.style["opacity"]="0";
    $dropdown.style["transform"]="translateX(20rem)";
    $backdrop.style["opacity"]="0";
    $backdrop.style["z-index"]="-1";
    $toggle1.style.opacity="1";
    $toggle2.style.transform="rotateZ(0deg)";
    $toggle2.style.transformOrigin="0";
    $toggle3.style.transform="rotateZ(0deg)";
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
