const aluno = prompt("Qual o nome do aluno?")
const nota1 = parseFloat(prompt("Qual foi a 1ª nota?"))
const nota2 = parseFloat(prompt("Qual foi a 2ª nota?"))

const media = (nota1 + nota2) / 2

alert(`A média das notas ${nota1} e ${nota2} é ${media}`)

//parseFloat - para números decimais ----- se usa "." para digitar, não a ","
//parseInt - para números inteiros