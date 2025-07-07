let valor = [10]

function mudaValor(n){
    n.push(11)
    console.log("valor interno", n)
}

mudaValor(valor)
console.log("valor externo", valor)