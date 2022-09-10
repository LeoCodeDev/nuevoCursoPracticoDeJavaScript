const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');

btnCalcular.addEventListener('click', calcular);

function calcular(){
    let resultado = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "Resultado: " + resultado;
}

