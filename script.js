let light = document.querySelector('.light');
let button = document.querySelector('#btn');
function toggleLight() {
    light.classList.toggle('red');
}
let x = setInterval(toggleLight, 1000);


button.addEventListener('click', function () {
    if (x) {
        clearInterval(x);
        x=null;
        button.innerHTML='Start Blinking';
       
    } else {

        x = setInterval(toggleLight, 1000);
        button.innerHTML='Stop Blinking';

    }
})
