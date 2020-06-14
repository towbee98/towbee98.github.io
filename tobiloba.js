$dropdown=document.querySelector(".dropdown");
$toggleBtn=document.querySelector(".toggle-btn");
$backdrop=document.querySelector(".backdrop");
$dropbtn=document.querySelectorAll(".dropdown a");
clicks=0;
clickedDropdownOptions=false;
$toggleBtn.addEventListener("click",call);
function call(){
    clicks++;
    if(clicks%2===1){
        $dropdown.style["opacity"]="1";
        $dropdown.style["transform"]="translateX(0rem)";
        $backdrop.style["opacity"]="0.7";
        for(i=0;i<$dropbtn.length;i++){
            $dropbtn[i].addEventListener("click",remove);
        }
    }
    else{
        $dropdown.style["opacity"]="0";
    $dropdown.style["transform"]="translateX(20rem)";
    $backdrop.style["opacity"]="0";
    }
    
}
function remove(){
    clickedDropdownOptions=true;
    if(clickedDropdownOptions){ 
    $dropdown.style["opacity"]="0";
    $dropdown.style["transform"]="translateX(20rem)";
    $backdrop.style["opacity"]="0";
    clicks++;
    clickedDropdownOptions=false;
    }
}

