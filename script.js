'use strict'
const buttonCalcular = document.getElementById('calcular')



const calcularTabuada = function () {
    let alvo = document.getElementById("resultadoList");
    alvo.innerText = "";
  //  let tabuada = Number(String(multiplicando).replace(',', '.'));
  //  let maxContador = Number(String(maxMultiplicador).replace(',', '.'));
    let status = true;
    let cont = 0;
    let resultado;

    const inputMultiplicando = document.getElementById('multiplicando').value.replace(',', '.')
    const inputMultiplicador = document.getElementById('multiplicador').value.replace(',', '.')



    if (inputMultiplicando == 0 || inputMultiplicador == 0)
        status = false;
    else if (isNaN(inputMultiplicando) || isNaN(inputMultiplicador))
        status = false;
    else {
        while (cont <= inputMultiplicador) {
            resultado = inputMultiplicando * cont;
            //document.getElementById('resultadoList').value = inputMultiplicando +'x'+ cont + '=' + resultado 
            console.log(inputMultiplicando +'x'+ cont + '=' + resultado);
            const textareaResultadoList = document.getElementById('resultadoList')
            textareaResultadoList.innerHTML += `${inputMultiplicando} x ${cont} = ${resultado} <br/>`; 
            //console.log(resultado)
            //cont = cont + 1;
            cont++;

            //cont += 1;
        }
        
    }
    
    return status;
    
};

buttonCalcular.addEventListener('click', calcularTabuada)

