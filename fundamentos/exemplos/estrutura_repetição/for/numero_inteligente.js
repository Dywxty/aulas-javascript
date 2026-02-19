const n_inicio = parseFloat(prompt("Escolha um número inicial: "))
const n_fim = parseFloat(prompt("Escolha o número final: "))

    if (n_inicio > n_fim){
        for (let i= n_fim; i < n_inicio; i++){
            console.log(`Número: ${i}`)
        }

}
    else if (n_inicio < n_fim){
        for (let i= n_fim; i > n_inicio; i--){
            console.log(`Número: ${i}`)
        }
}


