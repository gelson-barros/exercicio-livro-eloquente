// Faixa de preço
// você crie um array de objectos de faixa de preço para que possamos usar em um site

// Primeira Opção
let faixas = [
    { tooltip: "até R$700", minimo: 0, maximo: 700 },
    { tooltip: "de R$700 a R$1000", minimo: 700, maximo: 1000 },
    { tooltip: "R$100 ou mais", minimo: 1000, maximo: 999999999 },
];

//Segunda Opção(Factory Function)
function criarFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo,
    };
}

let faixas2 = [
    criarFaixaPreco("a", 1, 100),
    criarFaixaPreco("b", 100, 1000),
    criarFaixaPreco("a", 1000, 10000),
];

// Terceira Opção(constructor function)
function FaixaPreco(tooltip, minimo, maximo) {
    (this.tooltip = tooltip), (this.minimo = minimo), (this.maximo = maximo);
}

let faixas3 = [
    new FaixaPreco("a", 0, 500),
    new FaixaPreco("b", 500, 1000),
    new FaixaPreco("d", 1000, 1500),
];

console.log(faixas, faixas2, faixas3);
