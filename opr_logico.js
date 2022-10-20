// || retornar quando um dos dois forem TRUE 
let maiorIdade = false;
let crtBrasil = true;
let podeAplicar = maiorIdade || crtBrasil;

console.log("pode aplicar ", podeAplicar);

// NOT (!) negação 
let candiReprov = !podeAplicar;
console.log("candidado recusado", candiReprov);


let a = "vermelho";
let b = "azul";

let c = a;
a = b
b = c

console.log(a)
console.log(b)

// pelo que entendi, esse é como uma variavel
// cobrisse a outra e assim tudo sai certo.