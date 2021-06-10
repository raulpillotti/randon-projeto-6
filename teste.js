const teste = [
    {valor1: 10},
    {valor2: 20}
];

const resultado = teste.map(function(elem){
    
    return {
       valor: elem.valor
          
    }
});
console.log(resultado);
let soma;
resultado.map(soma += resultado.valor);

console.log(soma);