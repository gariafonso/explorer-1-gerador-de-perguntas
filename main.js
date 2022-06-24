const elementoResposta = document.querySelector('#resposta')
const resposta = [
  'Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?',

  'De quem é a famosa frase “Penso, logo existo”?',

  'Quais o menor e o maior país do mundo?',

  'De onde é a invenção do chuveiro elétrico?',

  'Quais o menor e o maior país do mundo?',

  'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',

  'Qual o grupo em que todas as palavras foram escritas corretamente?',

  'Qual o livro mais vendido no mundo a seguir à Bíblia?',

  'Quantas casas decimais tem o número pi?',

  'Atualmente, quantos elementos químicos a tabela periódica possui?',

  'Quais os países que têm a maior e a menor expectativa de vida do mundo?',

  'O que a palavra legend significa em português?',

  'Qual o número mínimo de jogadores numa partida de futebol?',

  'Quais os principais autores do Barroco no Brasil?',

  'Quais as duas datas que são comemoradas em novembro?'
]

//clicar em faser pergunta
function fazerPergunta() {
  //gerar numero aleatorio
  const totalRespostas = resposta.length
  const numeroAliatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = resposta[numeroAliatorio]
}
