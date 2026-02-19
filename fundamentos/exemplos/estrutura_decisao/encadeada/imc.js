alert("Vamos calcular seu IMC")

const nome = prompt("Qual seu nome?")
const altura = parseFloat(prompt("Qual sua altura?"))
const peso = parseFloat(prompt("Qual seu peso?"))

if(altura <= 0 || peso <= 0){
    alert ("Informações inválidas")
} else {
    const imc = peso / (altura*altura)
    
    alert(`O valor do IMC é ${imc}`)

    if(imc < 18.5){
        alert("Peso abaixo do normal")
    } 
    
    else if(imc >= 18.5 && imc < 24.9){
        alert("Peso normal")
    } 
    
    if(imc >= 24.9 && imc < 29.9){
        alert("Peso acima do normal (sobrepeso)")
    }
    
    if(imc >= 29.9 && imc < 34.9 ){
        alert("Obesidade grau I")
    }
    
    if(imc >= 34.9){
        alert("Obesidade grau II")
    }

    else{
        alert("Obesidade grau III")    
    }
}

alert(`Seu IMC está: ${imc}, ${nome}.`)

