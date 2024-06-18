const botaoConversor = document.querySelector("#botao")//Botão selecionado
botaoConversor.addEventListener("click", conversorDeValores)//Quando o botão é clicado ele chama a função-
//"conversorDeValores" e apresenta a menssagem



const seletorDeUnidade = document.querySelector("#seletorDeVelocidade")//elemento 'select' selecionado
// seletorDeTemperatura.addEventListener("change", trocaDeSeletor)// Toda vez que o seletor for trocado ele chamará 





function conversorDeValores() {
  const inputConversor = document.querySelector("#valorAConverter").value //Selecionando apenas o valor do input identificado

  const primeiro = document.querySelector("#valorParaConverter")
  const segundo = document.querySelector("#valorConvertido")

  const paragrafo = document.querySelector("#quilometro")

  const quilometro = 3.6
  const nós = 1.944
  const pesPorsegundo = 3.281

  //const resultadoKm = inputConversor * quilometro

  if (seletorDeUnidade.value == 'km') {
    segundo.innerHTML = (inputConversor * quilometro)
  }

  if (seletorDeUnidade.value == 'pe') {
    paragrafo.innerHTML = 'Pés'
    segundo.innerHTML = (inputConversor * nós)
  }

  if (seletorDeUnidade.value == 'nos') {
    paragrafo.innerHTML = 'Nós'
    segundo.innerHTML = (inputConversor * pesPorsegundo)
  }

  primeiro.innerHTML = (inputConversor)

}

