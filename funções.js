// funções // verbo + subistantivo 
 
let corSite = "azul"
function resetarCor( cor, tonalidade){
        corSite = cor + tonalidade
};
console.log(corSite);
resetarCor( "amalero ", "queimado");
console.log(corSite); 

// realizar tarefa. e nao devolver nada
function dizerNome(){
     console.log("henrique")
};
dizerNome();

// operações com função 
function MultiplicarPorDois(valor){
    return  valor* 7 ;
}

let resultado = MultiplicarPorDois(7)
console.log(resultado)