document.addEventListener('DOMContentLoaded', function() {
carregarMoedas();
});

async function carregarMoedas() {
const url = 'https://open.er-api.com/v6/latest/USD';
const response = await fetch(url);
const dados = await response.json();
const moedas = Object.keys(dados.rates);

const selecaoMoedaOrigem = document.getElementById('fromCurrency');
const selecaoMoedaDestino = document.getElementById('toCurrency');

moedas.forEach(codigo => {
let opcao = new Option(codigo, codigo);
selecaoMoedaOrigem.add(opcao.cloneNode(true));
selecaoMoedaDestino.add(opcao);
});
}

document.getElementById('convert').addEventListener('click', async () => {
const moedaDeOrigem = document.getElementById('fromCurrency').value;
const moedaDeDestino = document.getElementById('toCurrency').value;
const quantidade = parseFloat(document.getElementById('amount').value);

try {
const resultado = await converterMoeda(moedaDeOrigem, moedaDeDestino, quantidade);
document.getElementById('result').innerText = `Resultado: ${resultado}`;

salvarNoHistorico(moedaDeOrigem, moedaDeDestino, quantidade, resultado);
} catch (erro) {
document.getElementById('result').innerText = `Erro: ${erro.message}`;
}
});

async function converterMoeda(moedaDeOrigem, moedaDeDestino, quantidade) {
if (quantidade < 0) {
throw new Error("A quantidade não pode ser negativa");
}

if (moedaDeOrigem === moedaDeDestino) {
throw new Error("A moeda de origem e a moeda de destino não podem ser as mesmas");
}

const url = `https://open.er-api.com/v6/latest/${moedaDeOrigem}`;
const response = await fetch(url);
const dados = await response.json();

const taxa = dados.rates[moedaDeDestino];
return (quantidade * taxa).toFixed(2);
}

function salvarNoHistorico(origem, destino, quantidade, resultado) {
let historico = JSON.parse(localStorage.getItem('historicoConversoes')) || [];
historico.unshift({ origem, destino, quantidade, resultado });


historico = historico.slice(0, 10);

localStorage.setItem('historicoConversoes', JSON.stringify(historico));
}
