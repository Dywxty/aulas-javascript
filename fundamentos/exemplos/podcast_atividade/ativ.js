//ATIVIDADE:
//2.5 Exercício
//Você precisa fazer um atividade escolar da disciplina de inglês que consiste em produzir um podcast
//  sobre uma notícia esportiva, foi autorizado pelo professor que a atividade pode ser em grupos de até
//  3 pessoas. Para realização da atividade você convidou seus colegas de grupo para vir até sua casa e 
// vocês combinaram em comprar algo para fazer um lanche. Para um melhor aproveitamento do tempo vocês 
// decidiram comprar salgados fritos e assados que são entregues na sua residência.

//Sua missão nessa atividade é representar o contexto acima citado com pelo menos 2 tipos de salgados
//  de diferentes sabores e valores, também deve ser considerado 2 refrigerantes de 2 litros e a taxa
//  de entrega.

const salgado1 = prompt("Qual o nome do 1º salgado?")
const salgado2 = prompt("Qual o nome do 2º salgado?")

const precoSalgado1 = parseFloat(prompt('Qual o preço do 2ºsalgado?'))
const precoSalgado2 = parseFloat(prompt('Qual o preço do 1ºsalgado?'))

const refri1 = prompt("Qual o nome do 1º refri?")
const refri2 = prompt("Qual o nome do 2º refri?")

const precoRefri1 = parseFloat(prompt('Qual o preço do 1ºrefri?'))
const precoRefri2 = parseFloat(prompt('Qual o preço do 2ºrefri2?'))

const taxa_entrega = parseFloat(prompt("Qual a taxa de entrega?"))

const compra_total = precoSalgado1 + precoSalgado2 + precoRefri1 + precoRefri2 + taxa_entrega
const precoPorPessoa = compra_total / 3

alert (`Sua compra total é de: ${compra_total.toFixed(2)} \n
        Por pessoa: ${precoPorPessoa.toFixed(2)}
`) // toFixed(2) são as casas decimais








