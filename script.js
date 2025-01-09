let light=document.querySelector('.light');

function toggleLight(){
   light.classList.toggle('red');
}
toggleLight();

setInterval(toggleLight,1000)