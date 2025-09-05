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

// El traductor aunque tenga translate="no" en edge lo ignora debido a que es contenido dinámico por eso nos quedamos 
// Con estas dos variables globales para que no interfiera
let reachedStart = 0,
    reachedEnd = 0;

// Array para el control de secciones
let sectionArray =
    [{
        id: 'section1',
        display: 'flex'
    },
    {
        id: 'section2',
        display: 'none'
    },
    {
        id: 'section3',
        display: 'none'
    },
    {
        id: 'section4',
        display: 'none'
    },
    {
        id: 'section5',
        display: 'none'
    },
    {
        id: 'section6',
        display: 'none'
    }];

let sectionArrayIndex = 0;

const onscroll = () => {
    innerHeight.innerHTML = window.innerHeight;
    outerHeight.innerHTML = window.outerHeight;
    scrollHeight.innerHTML = document.body.scrollHeight;
    scrollY.innerHTML = Math.trunc(window.scrollY);

    // Top
    if (window.scrollY >= 40 && window.scrollY <= 60 && previousScrollY > window.scrollY) {
        inicio.innerHTML = reachedStart++;
        if (sectionArrayIndex) {
            // const sectionToDeactivate = document.querySelector("." + sectionArray[sectionArrayIndex].id);
            // sectionArray[sectionArrayIndex].display = sectionToDeactivate.style.display = "none";
            sectionArrayIndex--;
            const sectionToActivate = document.querySelector("." + sectionArray[sectionArrayIndex].id);
            sectionArray[sectionArrayIndex].display = sectionToActivate.style.display = "flex";
        }
    }

    // Bottom
    const difference = document.documentElement.scrollHeight - window.innerHeight;
    const scrollposition = Math.ceil(document.documentElement.scrollTop);

    if (difference - scrollposition <= 0 && previousScrollY < window.scrollY) {
        final.innerHTML = reachedEnd++;
        if (sectionArrayIndex < sectionArray.length - 1) {
            // const sectionToDeactivate = document.querySelector("." + sectionArray[sectionArrayIndex].id);
            // sectionArray[sectionArrayIndex].display = sectionToDeactivate.style.display = "none";
            sectionArrayIndex++;
            const sectionToActivate = document.querySelector("." + sectionArray[sectionArrayIndex].id);
            sectionArray[sectionArrayIndex].display = sectionToActivate.style.display = "flex";
        }
    }

    previousScrollYlbl.innerHTML = previousScrollY = Math.trunc(window.scrollY);
};

window.addEventListener("scroll", onscroll);