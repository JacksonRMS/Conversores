const botaoConversor = document.querySelector("#botao")//Botão selecionado
 botaoConversor.addEventListener("click", conversorDeValores)//Quando o botão é clicado ele chama a função-
 //"conversorDeValores" e apresenta a menssagem

 

 const seletorDeTemperatura = document.querySelector("#seletorDeTemperatura")//elemento 'select' selecionado
// seletorDeTemperatura.addEventListener("change", trocaDeSeletor)// Toda vez que o seletor for trocado ele chamará 

 function conversorDeValores() {
   const inputConversor = document.querySelector("#valorAConverter").value //Selecionando apenas o valor do input identificado
   const fahrenheit = 9 / 5
   const resultado = inputConversor * fahrenheit + 32

   const tempo = document.querySelector("#valorConvertido")

   if (seletorDeTemperatura.value == 'dolar') {
       tempo.innerHTML = resultado
          }

   console.log(resultado)
 }
 
    const tempo = document.querySelector("#valorConvertido")

//    const fahrenheit = 9 / 5
//    const resultado = inputConversor * fahrenheit + 32

//    if (seletorDeTemperatura.value == 'dolar') {
//       tempo.innerHTML.text = resultado
//    }

// }









