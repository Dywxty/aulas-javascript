alert('Seja bem vindo, vamos calcular  média')

const nome = prompt("Qual seu nome?")

const n1 = parseFloat(prompt("Qual a primeira nota?"))
const n2 = parseFloat(prompt("Qual a segunda nota?"))

const media = (n1+n2)/2

alert(`A média das notas é ${media}`)

if (media <= 6){
    alert(`O/A aluno(a) ${nome} foi aprovado`)
} else {
    alert(`O/A aluno(a) ${nome} foi reprovado`)
}