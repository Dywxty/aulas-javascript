//informações
const adultos = parseFloat(prompt("Digite o número de adultos:"));
const criancas = parseFloat(prompt("Digite o número de crianças:"));
const horasNoEspaco = parseFloat(prompt("Digite quantas horas de aluguel do espaço:"));
const horasNoKaraoke = parseFloat(prompt("Digite quantas horas de karaokê:"));
const conjuntosMesas = parseFloat(prompt("Digite quantos conjuntos de mesas e cadeiras:"));

//consumo por pessoa
const salgadinhosPorPessoa = 18;
const docinhosPorPessoa = 6;
const refriLitrosPorPessoa = 1;
const coposPorPessoa = 5;
const pratosPorPessoa = 2;
const kitPorPessoa = 2;

//preços e custos
const precoSalgadinhos = 48.90 / 100; //por unidade
const precoDocinhos = 42.90 / 20;
const precoRefri = 8.99; //uni. de 2L
const precoCopos = 12.99 / 100;
const precoPratos = 4.99 / 10;
const precoKit = 7.99 / 10;
const precoMesas = 17.99;
const precoKaraoke = 27.99 / 2; //por horq de uso
const precoEspaco = 239.99; //por hora

const totalPessoas = adultos + criancas; //soma de todos da festa


//quantidades necessárias por pessoa
const quantidadeSalgadinhos = totalPessoas * salgadinhosPorPessoa;
const quantidadeDocinhos = totalPessoas * docinhosPorPessoa;
const quantidadeRefri = Math.ceil((totalPessoas * refriLitrosPorPessoa) / 2); //cada refri tem 2L - arredonda os valores para o mais prox
const quantidadeCopos = totalPessoas * coposPorPessoa;
const quantidadePratos = totalPessoas * pratosPorPessoa;
const quantidadeKit = totalPessoas * kitPorPessoa;

//custos por partes
const custoDeSalgadinhos = quantidadeSalgadinhos * precoSalgadinhos;
const custoDeDocinhos = quantidadeDocinhos * precoDocinhos;
const custoDoRefri = quantidadeRefri * precoRefri;
const custoDosCopos = quantidadeCopos * precoCopos;
const custoDosPratos = quantidadePratos * precoPratos;
const custoDoKit = quantidadeKit * precoKit;
const custoDeMesas = conjuntosMesas * precoMesas;
const custoDoKaraoke = horasNoKaraoke * precoKaraoke;
const custoDoEspaco = horasNoEspaco * precoEspaco;

//custos totais
const custoComunitario = custoDeMesas + custoDoKaraoke + custoDoEspaco;
const custoIndividual = custoDeSalgadinhos + custoDeDocinhos + custoDoRefri + custoDosCopos + custoDosPratos + custoDoKit;
const custoTotal = custoIndividual + custoComunitario;
const valorPorAdulto = custoComunitario / adultos;

alert( //mostra o relatório final com os calculos prontos
"Relatório da Festa:\n\n" +
"Salgadinhos: R$ " + custoDeSalgadinhos.toFixed(2) + "\n" +
"Docinhos: R$ " + custoDeDocinhos.toFixed(2) + "\n" +
"Refrigerantes: R$ " + custoDoRefri.toFixed(2) + "\n" +
"Copos: R$ " + custoDosCopos.toFixed(2) + "\n" +
"Pratos: R$ " + custoDosPratos.toFixed(2) + "\n" +
"Kit garfo/faca: R$ " + custoDoKit.toFixed(2) + "\n" +
"Mesas e cadeiras: R$ " + custoDeMesas.toFixed(2) + "\n" +
"Karaokê: R$ " + custoDoKaraoke.toFixed(2) + "\n" +
"Espaço: R$ " + custoDoEspaco.toFixed(2) + "\n\n" +
"Custo total da festa: R$ " + custoTotal.toFixed(2) + "\n" +
"Valor comunitário por adulto: R$ " + valorPorAdulto.toFixed(2)
);

