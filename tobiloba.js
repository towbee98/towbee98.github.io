$dropdown=document.querySelector(".dropdown");
$toggleBtn=document.querySelector(".toggle-btn");
$backdrop=document.querySelector(".backdrop");
$dropbtn=document.querySelectorAll(".dropdown a");

$toggleBtn.addEventListener("click",call);
function call(){
    $dropdown.style["display"]="block";
    $backdrop.style["display"]="block";
    $backdrop.addEventListener("click",remove);
    for(i=0;i<$dropbtn.length;i++){
    $dropbtn[i].addEventListener("click",remove);
    }
  
}
function remove(){
    $dropdown.style["display"]="none";
    $backdrop.style["display"]="none";
}



