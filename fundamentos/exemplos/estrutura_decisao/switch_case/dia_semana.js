const numero = prompt("Digite um número de 1 a 7")

if(typeof numero !== "number"){
    alert("O valor não é um número")
} else {
    const dia = parseInt(numero)
    
    switch(dia){
        case 1:
            alert("Domingo")
            break;
        
        case 2:
            alert("Segunda-feira")
            break;
        
        case 3:
            alert("Terça-feira")
            break;

        case 4:
            alert("Quarta-feira")
            break;

        case 5:
            alert("Quinta-feira")
            break;

        case 6:
            alert("Sexta-feira")
            break;

        case 7:
            alert("Sábado")
            break;

        default:
            alert("Número inválido, digite um valor de 1 a 7")
        }
}
