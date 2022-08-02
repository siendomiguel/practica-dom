//------------------------------------------------------------------------------ //Seleccionar etiquetas


const h1 = document.querySelector('h1');

const p = document.querySelector('p');

const parrafito = document.querySelector('.parrafito');

const pid = document.querySelector('#pid');

const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

console.log(input.value);


//------------------------------------------------------------------------------ //Modificar elementos 

h1.innerText = 'Patito <br> Feo'
p.innerHTML = 'Parrafo cambiado a <strong>Patito</strong>'
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'blue');

p.classList.add('verde');
p.classList.toggle('verde');
console.log(p.classList.contains('verde'));

input.placeholder = 'Hola ramon';

//------------------------------------------------------------------------------ //Crear elementos HTML

console.log(document.createElement('img'));

let img = document.createElement('img');

img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');

pid.append(img)