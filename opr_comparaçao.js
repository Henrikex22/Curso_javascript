// operadores de comparação 
// if, else, switchs, cases
let hora = 22;

if (hora > 6 && hora < 12) {
    console.log("bom dia");
}
else if (hora > 12 && hora < 18) {
    console.log("boa tarde");
}
else {
    console.log("boa noite")
}

// switchs
let permissao; // comum, gerente, diretor 
permissao = "diretor"

switch (permissao) {
    case "comum":
        console.log("usuario comum")
        break;

    case "gerente":
        console.log("usuario gerentente")
        break;

    case "diretor":
        console.log("usuario diretor")
        break;

    default:
        console.log("usuario nao reconhecido")

}; 