const toggleBtn=document.querySelector(".toggle-btn");
const toggleBar1=document.querySelector(".toggle-1");
const toggleBar2=document.querySelector(".toggle-2");
const toggleBar3=document.querySelector(".toggle-3");
const modal=document.querySelector(".modal");
const email=document.forms[0][0];
const submitBtn=document.forms[0][1];
const message=document.querySelector(".message");
let click=0; // this is a counter to contrl the clicks on the toggle button

toggleBtn.addEventListener('click',()=>{
    if(click%2===0){
        modal.style.top='30px';
        toggleBar3.style.opacity="0";
        toggleBar2.style.transform="rotateZ(45deg) translateX(-3px)";
        toggleBar1.style.transform="rotateZ(-45deg) translateX(-6px) translateY(2px)";
        toggleBtn.style.animation="rotation 700ms 1s 1 backwards";
    }
    else{
        modal.style.top="-300px";
        toggleBar3.style.opacity="1";
        toggleBar2.style.transform="rotateZ(0) translateX(0)";
        toggleBar1.style.transform="rotateZ(0) translateX(0) translateY(0)";
        toggleBtn.style.animation="rotation 700ms 1s 1 none";
    }
    click++
})

modal.addEventListener('click',()=>{
    for(let i=0;i<modal.children.length;i++){
        if(event.target.textContent==modal.children[i].textContent){
                    click++;
                    modal.style.top="-300px";
                    toggleBar3.style.opacity="1";
                    toggleBar2.style.transform="rotateZ(0) translateX(0)";
                    toggleBar1.style.transform="rotateZ(0) translateX(0) translateY(0)";
                    toggleBtn.style.animation="rotation 700ms 1s 1 none";
                    break;
        }
    }
})


submitBtn.addEventListener('click',function(){
    event.preventDefault();
    if(email.value){
       let params={
            email:email.value
        }
        const url=`https://cors-anywhere.herokuapp.com/https://ecx.herokuapp.com/api/verification`; 
        $.ajax({//this is used to control the loader
            type:"POST",
            url:url,
            dataType:"json",

            beforeSend:function(){//this 
                $(".loader").show();
            },

            complete:function(){
                $(".loader").hide();
            }
            
        })
        makeApiCall(url,params);
        email.value="";
    }
})
makeApiCall=(url,params)=>{
    const data=JSON.stringify(params);
    const headers=new Headers({
        'Accept':'application/json',
        'Content-Type':'application/json'
    });
    const request= new Request(url,{
        method:'POST',
        headers:headers,
        body:data
    })
    fetch(request)
        .then((response)=>{
            if(response.ok){
                return response.json();
            }
            else{
                return Promise.reject(response);
            }
        })
        .then((response)=>msg=Object.values(response)[0])
        .then(()=>{
            message.textContent=msg;
            message.style.display="block";
        })
        .catch(error =>{
            console.log(` error occured : ${error}`);
            message.textContent="Sorry,email not found";
        })        
}