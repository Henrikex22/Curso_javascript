//receber qunt de valor pra avaliar 
// fuçãp exibe cada valor impar ou par 

exibirTipo(3)
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++)
        if (i % 2 === 0)
            console.log(i, "PAR")
        else
            console.log(i, "IMPAR")
}