// Referencias del HTML
const innerHeight = document.querySelector('#innerHeight'),
    outerHeight = document.querySelector('#outerHeight'),
    scrollHeight = document.querySelector('#scrollHeight'),
    scrollY = document.querySelector('#scrollY'),
    previousScrollYlbl = document.querySelector('#previousScrollYlbl'),
    inicio = document.querySelector('#inicio'),
    final = document.querySelector('#final');

// Para saber la dirección del scroll cuando sube y baja
let previousScrollY = 0;

const onscroll = () => {
    innerHeight.innerHTML = window.innerHeight;
    outerHeight.innerHTML = window.outerHeight;
    scrollHeight.innerHTML = document.body.scrollHeight;
    scrollY.innerHTML = Math.trunc(window.scrollY);

    // Inicio

    if (window.scrollY >= 40 && window.scrollY <=60 && previousScrollY > window.scrollY) {
        inicio.innerHTML = parseInt(inicio.innerHTML) + 1;
    }

    const difference = document.documentElement.scrollHeight - window.innerHeight;
    const scrollposition = Math.ceil(document.documentElement.scrollTop); 

    if (difference - scrollposition <= 0 && previousScrollY < window.scrollY) {
        final.innerHTML = parseInt(final.innerHTML) + 1;
    }  

    previousScrollYlbl.innerHTML= previousScrollY = Math.trunc(window.scrollY);
};

window.addEventListener("scroll", onscroll);