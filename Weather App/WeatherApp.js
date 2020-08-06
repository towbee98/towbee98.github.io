const form=document.forms[0];
const input= document.forms[0][0];
const submit=document.forms[0][1];
const cityName=document.querySelector(".city-name");
const cityTemp=document.querySelector(".city-temp");
const information=document.querySelector(".information");
const description=document.querySelector("figcaption");
const image=document.querySelector(".weather-icon");
const countryAbbreviation=document.querySelector(".symbol");
const searchBtn=document.querySelector(".search");
const degree=document.querySelector("span+sup");
searchBtn.addEventListener('click',function(){
    form.style.top="80px";
    form.style.opacity=1;
})
submit.addEventListener('click',function(){
    event.preventDefault();
    if(input.value){
        url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=7006a2531c5c616c3033f90edaf9a051&units=metric`;
        console.log("done");
        makeApiCall(url);
    }
    form.style.top="-10px";
    form.style.opacity=0;
    input.value="";
})

function makeApiCall(url){
    let xhr=new XMLHttpRequest();
    console.log(xhr.readyState)
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            console.log(xhr.responseText);
            localStorage.setItem(name,xhr.response);
            response=JSON.parse(xhr.response);
            cityName.textContent=response["name"];
            countryAbbreviation.textContent=response["sys"]["country"];
            cityTemp.textContent=response["main"]["temp"];
            description.textContent=response["weather"][0]["description"];
            image.src=`https://openweathermap.org/img/wn/${response["weather"][0]["icon"]}@2x.png`;
            degree.style.display="inline";            
        }
        else
            console.log("loading");
    }
    xhr.open('GET',url,true);
    xhr.send();
}
