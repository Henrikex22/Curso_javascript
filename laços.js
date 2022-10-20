// laços 
// for, whille, Do while, for in, for off
// 1.for 
for (let i = 0; i < 5; i++) {
    if (1 % 2 !== 0) {
        console.log(i);
    }
}
for (let i = 1; i <= 5; i++) {
    console.log("estou aprendendo", i)
}

// 2 while
let i = 5;
while (i > 0) {
    if (1 % 2 !== 0) {
        console.log(i)
    }
    i--;
};

//3 Do..while 
let i = 1;
do {
    console.log('digitando', i);
    i++
} while (i <= 10);

//for in..
const pessoa = {
    nome: 'henrique',
    idade: 25
};
key--
for (let chave in pessoa) {
    console.log(chave)
}

const cores = ['vermelho', 'verde', 'branco']

for (let indice in cores) {
    console.log(indice, cores[indice])
}

//for.. of
const cores = ['vermelho', 'verde', 'branco']
for (let cor of cores) {
    console.log(cor);
