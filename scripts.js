let numeros = [1, 3, 5, 7, 11];

const somaNumeros = numeros.reduce((total, numeroChamado) => {
    return total + numeroChamado
}, 0);

console.log(somaNumeros);