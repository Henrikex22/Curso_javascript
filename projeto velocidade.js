//velçocidade maxima de ate 70 
// a cada 5km acima do limite vc ganha 1 ponto 
// math.floor()
//caso pontos maior 12 => carteira suspensa 

verificarvelocidade(150)

function verificarvelocidade(velocidade) {

    if (velocidade <= 70)
        console.log("velocidade ok");
    else {
        const pontos = Math.floor((velocidade - 70) / 5);
        if (pontos >= 12)
            console.log("carteira suspensa")
        else
            console.log("pontos", pontos)
    }
}
