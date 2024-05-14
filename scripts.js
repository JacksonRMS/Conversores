const botaoConversor = document.querySelector("#botao")

botaoConversor.addEventListener("click", conversorDeValores)

function conversorDeValores(){
    const inputConversor = document.querySelector("#valorAConverter").value

    const dolarDoDia = 6

    const resultadoConvertido = inputConversor / dolarDoDia 

    console.log(resultadoConvertido)
}

