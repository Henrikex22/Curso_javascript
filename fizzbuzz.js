// FIZZBUZZ
// divisivel por 3 = fizz
// dividivel por 5 buzz 
//dividivel por 3 e 5 = fizzBuzz
// nao divisivel por 3 ou 5 = entrada 
// nao é um numero => "nao é um número"

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== "number")
        return "não é um número";
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return "FizzBuzz";
    if (entrada % 3 === 0)
        return "fizz";
    if (entrada % 5 === 0)
        return "buzz";
    return entrada;
}

//quando fiz não deu certo, ai depois ele fez
//fazendo de cima pra baixo reorganizando ai funcionou.