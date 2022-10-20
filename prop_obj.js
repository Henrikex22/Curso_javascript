//cria metodo pra ler propiedadaes de um objeto 
// exibir somente stringer 

const filme = {
    titulo: "trancendencia",
    ano: 2018,
    duracao: "2:30",
    atPr: "jonny Depp"
}
exibirPr(filme)
function exibirPr(obj) {
    for (prop in obj)
        if (typeof obj[prop] === "string")
            console.log(prop, obj[prop])
}