'use strict'
const buttonCalcular = document.getElementById('calcular')

const calcularTabuada = function () {

    let cleanDivResultado = document.getElementById("resultadoList");
    cleanDivResultado.innerText = "";

    let status = true;
    let cont = 0;
    let resultado;

    const inputMultiplicando = document.getElementById('multiplicando').value.replace(',', '.')
    const inputMultiplicador = document.getElementById('multiplicador').value.replace(',', '.')
    const textareaResultadoList = document.getElementById('resultadoList')


    if (inputMultiplicando == 0 || inputMultiplicador == 0)
    textareaResultadoList.innerHTML += `O multiplicando e o máximo multiplicador não pode ser zero`;
    else if (isNaN(inputMultiplicando) || isNaN(inputMultiplicador))
    textareaResultadoList.innerHTML += `Digite apenas números`;
    else {
        while (cont <= inputMultiplicador) {
            resultado = inputMultiplicando * cont;
            //const textareaResultadoList = document.getElementById('resultadoList')
            textareaResultadoList.innerHTML += `${inputMultiplicando} x ${cont} = ${resultado} <br/>`;
            cont++;

        }

    }

    return status;

};

buttonCalcular.addEventListener('click', calcularTabuada)

