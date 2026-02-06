const nome = prompt("Qual seu primeiro nome?") //prompt é a caixinha de ditação, o input do python
const endereco = prompt('Qual seu endereço?')
const idade = prompt('Qual sua idade?')

alert(`
    ${nome}, você tem ${idade} anos, \n mora no endereço ${endereco}
    `) //Mostra a mensagem com as váriaveis que o usuário definiu seus valores

// Se usar no node (CMD ou PowerShell) geralmente da ruim, por isso é mais recomendado utilizar no html