// definição dos preços
const TARIFA_DIA_UTIL = 99.90;      // Segunda a Sexta (incluso café e almoço)
const TARIFA_FIM_SEMANA = 139.90;   // Sábado e Domingo (apenas café)
const TARIFA_ALMOCO = 49.90;        // Almoço adicional nos finais de semana
const ACRESCIMO_FERIADO = 0.15;     // 15% de acréscimo em feriados

//feriados - Brasil (formato MM-DD)
const HOLIDAYS = [
    '01-01', // Ano Novo
    '02-13', // Carnaval (aproximado)
    '08-03', // Dia das mulheres
    '03-29', // Sexta-feira Santa (aproximado)
    '04-21', // Tiradentes
    '05-01', // Dia do Trabalho
    '09-07', // Independência
    '10-12', // Nossa Senhora Aparecida
    '11-02', // Finados
    '11-15', // Proclamação da República
    '11-20', // Consciência Negra
    '12-25'  // Natal
];

function ehFeriado(data) {
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return FERIADOS.includes(`${mes}-${dia}`);
}

function obterNomeDia(data) {
    const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return dias[data.getDay()];
}

function formatarData(data) {
    return data.toLocaleDateString('pt-BR');
}

function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

function calcular() {
    // Obter valores de entrada
    const adultos = parseInt(document.getElementById('adultos').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;
    const dataEntradaStr = document.getElementById('dataEntrada').value;
    const dataSaidaStr = document.getElementById('dataSaida').value;
    const incluirAlmoco = document.getElementById('incluirAlmoco').checked;

    // Validações
    if (!dataEntradaStr || !dataSaidaStr) {
        alert('Por favor, selecione as datas de entrada e saída');
        return;
    }

    if (adultos < 1) {
        alert('É necessário pelo menos 1 adulto');
        return;
    }

    const dataEntrada = new Date(dataEntradaStr + 'T00:00:00');
    const dataSaida = new Date(dataSaidaStr + 'T00:00:00');

    if (dataSaida <= dataEntrada) {
        alert('A data de saída deve ser posterior à data de entrada');
        return;
    }

    // Calcular noites e valores
    let valorTotal = 0;
    let noites = 0;
    const detalhesDisarios = [];
    let dataAtual = new Date(dataEntrada);

    while (dataAtual < dataSaida) {
        const diaSemana = dataAtual.getDay();
        const ehFimSemana = diaSemana === 0 || diaSemana === 6;
        const feriado = ehFeriado(dataAtual);

        // Determinar preço base
        let tarifaDiaria = ehFimSemana ? TARIFA_FIM_SEMANA : TARIFA_DIA_UTIL;
        
        // Calcular valor do dia (adultos + crianças pagam meia)
        let valorDia = (tarifaDiaria * adultos) + (tarifaDiaria * 0.5 * criancas);

        // Adicionar almoço se for fim de semana e o usuário selecionou
        let valorAlmoco = 0;
        if (ehFimSemana && incluirAlmoco) {
            valorAlmoco = (TARIFA_ALMOCO * adultos) + (TARIFA_ALMOCO * 0.5 * criancas);
            valorDia += valorAlmoco;
        }

        // Aplicar acréscimo de feriado
        if (feriado) {
            valorDia *= (1 + ACRESCIMO_FERIADO);
        }

        // Armazenar detalhes do dia
        const nomeDia = obterNomeDia(dataAtual);
        const dataFormatada = formatarData(dataAtual);
        const tipo = feriado ? 'Feriado' : (ehFimSemana ? 'Fim de Semana' : 'Dia Útil');

        detalhesDisarios.push({
            data: dataFormatada,
            nomeDia: nomeDia,
            tipo: tipo,
            valor: valorDia
        });

        valorTotal += valorDia;
        noites++;
        dataAtual.setDate(dataAtual.getDate() + 1);
    }

    // Calcular totais
    const totalHospedes = adultos + criancas;
    const porAdulto = (valorTotal / noites / adultos).toFixed(2);
    const porCrianca = criancas > 0 ? (valorTotal / noites / criancas / 2).toFixed(2) : '0.00';

    // Atualizar interface
    document.getElementById('totalHospedes').textContent = `${totalHospedes} pessoa${totalHospedes !== 1 ? 's' : ''}`;
    document.getElementById('totalNoites').textContent = `${noites} noite${noites !== 1 ? 's' : ''}`;
    document.getElementById('valorTotal').textContent = formatarMoeda(valorTotal);
    
    const textoDetalhamento = `Por adulto: ${formatarMoeda(porAdulto)} | Por criança: ${formatarMoeda(porCrianca)}`;
    document.getElementById('detalhamento').textContent = textoDetalhamento;

    // Preencher tabela de detalhamento
    const corpoTabela = document.getElementById('corpoTabelaDiaria');
    corpoTabela.innerHTML = '';

    detalhesDisarios.forEach(detalhe => {
        const linha = document.createElement('tr');
        const classeBadge = detalhe.tipo.toLowerCase().replace(/\s+/g, '-');
        linha.innerHTML = `
            <td>${detalhe.data}</td>
            <td>${detalhe.nomeDia}</td>
            <td><span class="emblema-tipo ${classeBadge}">${detalhe.tipo}</span></td>
            <td>${formatarMoeda(detalhe.valor)}</td>
        `;
        corpoTabela.appendChild(linha);
    });

    // Mostrar seção de resultados
    document.getElementById('secaoSaida').style.display = 'block';

    // Scroll para resultados
    setTimeout(() => {
        document.getElementById('secaoSaida').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Permitir cálculo ao pressionar Enter
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dataSaida').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calcular();
        }
    });

    // Definir data mínima para entrada como hoje
    const hoje = new Date().toISOString().split('T')[0];
    document.getElementById('dataEntrada').setAttribute('min', hoje);
    document.getElementById('dataSaida').setAttribute('min', hoje);
});