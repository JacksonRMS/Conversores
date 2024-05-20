const botaoConversor = document.querySelector("#botao")//Botão selecionado
botaoConversor.addEventListener("click", conversorDeValores)//Evento adicionado ao botão

const seletor = document.querySelector("#seletorDeMoeda")//elemento 'select' selecionado
seletor.addEventListener("change", trocaDeSeletor)// Toda vez que o seletor for trocado ele chamará 
//função abaixo "trocaDeSeletor"
function trocaDeSeletor() {
    const nomeDaMoeda = document.getElementById("dolares")
    const imagem = document.getElementById("bandeira")
    const fundo = document.getElementById("fundo")

    if (seletor.value == 'dolar'){
        nomeDaMoeda.innerHTML = "mexirica"
    imagem.src = "./assets/dolar.png"
    
    }
    
    if (seletor.value == 'euro'){
        nomeDaMoeda.innerHTML = "batata"
    imagem.src = "./assets/euro.png"
    fundo.style.backgroundColor = "#857744"
    fundo.style.backgroundColor = "#852394"
}

conversorDeValores()

}

function conversorDeValores() {
    const inputConversor = document.querySelector("#valorAConverter").value//Selecionando apenas o valor do input identificado

    const valorEmReal = document.querySelector("#valorParaConverter") //Paragrafo com o valor a ser convertido
    const moedas = document.querySelector("#valorConvertido")//Paragrafo com o valor convertido

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
        moedas.innerHTML = new Intl.NumberFormat("de-DE", { // O comando "Intl" formata o valor para a moeda
            style: "currency",
            currency: "EUR"
        }).format(inputConversor / euroDoDia)
    }

    valorEmReal.innerHTML = new Intl.NumberFormat("pt-BR", {// O comando "Intl" formata o valor para a moeda selecionada
        style: "currency",
        currency: "BRL"
    }).format(inputConversor)
}

