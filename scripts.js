const botaoConversor = document.querySelector("#botao")
botaoConversor.addEventListener("click", conversorDeValores)

const seletor = document.querySelector("#seletorDeMoeda")


function conversorDeValores() {
    const inputConversor = document.querySelector("#valorAConverter").value

    const valorEmReal = document.querySelector("#valorParaConverter")
    const moedas = document.querySelector("#valorConvertido")

    const dolarDoDia = 6
    const euroDoDia = 7


    if (seletor.value == 'dolar') {
        //Se o select estiver selecionando o valor de DOLAR, essa condição entra!
        moedas.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputConversor / dolarDoDia)
    }

    if (seletor.value == 'euro') {
        //Se o select estiver selecionando o valor de EURO, essa condição entra!
        moedas.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputConversor / euroDoDia)
    }

    valorEmReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputConversor)
}

