const botaoConversor = document.querySelector("#botao")//Botão selecionado
botaoConversor.addEventListener("click", conversorDeValores)//Quando o botão é clicado ele chama a função-
//"conversorDeValores" e apresenta a menssagem



const seletorDeTemperatura = document.querySelector("#seletorDeTemperatura")//elemento 'select' selecionado
// seletorDeTemperatura.addEventListener("change", trocaDeSeletor)// Toda vez que o seletor for trocado ele chamará 

function conversorDeValores() {
  const inputConversor = document.querySelector("#valorAConverter").value //Selecionando apenas o valor do input identificado

  const fahrenheit = 9 / 5
  const kel = 273.15


  const tempo = document.querySelector("#valorConvertido")

   if (seletorDeTemperatura.value == 'dolar') {
     tempo.innerHTML = new Intl.NumberFormat("pt-BR", { // O comando "Intl" formata o valor para a moeda
       style: "unit",
       unit: "fahrenheit"
   }).format(inputConversor*fahrenheit+32)
   }

   if (seletorDeTemperatura.value == 'euro') {
     tempo.innerHTML = new Intl.NumberFormat("pt-BR", { // O comando "Intl" formata o valor para a moeda
       style: "unit",
        unit: "kelvin"
   }).format(inputConversor + kel)// Erro ainda indefinido...
   }


  
}











