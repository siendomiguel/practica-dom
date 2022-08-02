let h1 = document.querySelector('h1');

let input1 = document.querySelector('#calculo1');
let input2 = document.querySelector('#calculo2');
let btn = document.querySelector('#btnCalcular');
let result = document.querySelector('#result')

let btnOnClick = () => {
    let suma = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = 'Este es el resultado: ' + suma;
};