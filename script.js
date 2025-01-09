let light=document.querySelector('.light');

function toggleLight(){
   light.classList.toggle('red');
}

setInterval(toggleLight,1000);