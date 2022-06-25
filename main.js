const inputPergunta = document.querySelector('#inputPergunta')
const resposta = document.querySelector('#resposta')

//respostas
const respostas = [
  'Não sei',
  'Provavelmente',
  'Depende da sua dedicação',
  'Não posso responder',
  'Faça outra pergunta',
  'Talvez',
  'Sim'
]

//Quando clicar no botão
function gerarPergunta() {
  const totalRespostas = respostas.length
  //Gerar numero aleatorio
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  const div = '<div>' + inputPergunta.value + '</div>'

  resposta.innerHTML = div + respostas[numeroAleatorio]
}
