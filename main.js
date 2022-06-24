const elementoResposta = document.querySelector('#resposta')

const inputPergunta = document.querySelector("#inputPergunta")

const resposta = [
  'Sim, estou.',

  'Não',

  'Sim, eu tenho.',

  'Não, não tenho.',

  'Sim, estavas.',

  'Eras .',

  'Acho.',

  'Não sei.',

  'Gosto disso.',

  'Faz outra pergunta.',

  'não sei.',

  'Não tenho certeza.',

  'Provavelmente.',

  'Se você se dedicar.',

  'concordo contigo.'
]

//clicar em faser pergunta
function fazerPergunta() {

  if (inputPergunta.value == ""){
    alert("digite uma pergunta")
    return
  }

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  //gerar numero aleatorio
  const totalRespostas = resposta.length
  const numeroAliatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + resposta[numeroAliatorio]

  // Sumir a resposta depois de 3 segundos
  setTimeout(function(){
    elementoResposta.style.opacity = 0;
  },3000)
}
