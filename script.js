let light=document.querySelector('.light');
setInterval(function toggleLight(){
    light.classList.toggle('red');
 },1000)
 toggleLight();