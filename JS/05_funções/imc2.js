
function calcularIMC(peso, altura, callback){
    if(peso === undefined || altura === undefined){
        throw Error('precisa dos dois parametros');
    }
    let imc = peso / (altura * altura);
    if(typeof callback === 'function'){
        return callback(imc);
    }
}

function classificaIMC(imc){
    if(imc <= 16.9) return 'muito abaixo do peso'
    else if(imc <= 18.4) return 'abaixo do peso'
    else if(imc <= 24.9) return 'normar'
    else if(imc <= 29.9) return 'acima do peso'
    else if(imc <= 34.9) return 'obesidade grau 1'
    else if(imc <= 40) return 'obesidade grau 2'
    else return 'obesidade morbida'
}

let imc = calcularIMC(60, 1.65)
console.log(imc)
let imc2 = calcularIMC(60, 1.65, calcularIMC)
console.log(imc2)