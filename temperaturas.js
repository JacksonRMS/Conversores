const botaoConversor = document.querySelector("#botao")//Botão selecionado
botaoConversor.addEventListener("click", conversorDeValores)//Quando o botão é clicado ele chama a função-
//"conversorDeValores" e apresenta a menssagem
botaoConversor.addEventListener("click", soma)
botaoConversor.addEventListener

const seletorDeTemperatura = document.querySelector("#seletorDeTemperatura")//elemento 'select' selecionado
// seletorDeTemperatura.addEventListener("change", trocaDeSeletor)// Toda vez que o seletor for trocado ele chamará 

function conversorDeValores() {
  const inputConversor = document.querySelector("#valorAConverter").value //Selecionando apenas o valor do input identificado
  const paraConverter = document.querySelector("#valorParaConverter")
  const pTemperatura = document.querySelector("#dolares")
  const fahrenheit = 9 / 5
  const tempo = document.querySelector("#valorConvertido")

  if (seletorDeTemperatura.value == 'fahrenheit') {
    pTemperatura.innerHTML = "Fahrenheit"
    paraConverter.innerHTML = inputConversor
    tempo.innerHTML = (inputConversor * fahrenheit + 3 + "°F")
  }
}

function soma() {
  const inputConversor = document.querySelector("#valorAConverter").value
  const paraConverter = document.querySelector("#valorParaConverter")
  const kel = 273.15
  const tempo = document.querySelector("#valorConvertido")
  const pTemperatura = document.querySelector("#dolares")

  if (seletorDeTemperatura.value == 'kelvin') {
    pTemperatura.innerHTML = "kelvin"
    paraConverter.innerHTML = inputConversor
    tempo.innerHTML = (inputConversor * 1 + 273 + "°K")
  }

}










