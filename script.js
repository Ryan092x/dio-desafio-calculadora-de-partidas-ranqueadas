// Desafio de projeto 02
// Dev: Ryan Victor
// Data: 12/11/2023

// Variáveis 
let vitorias = 155
let derrotas = 98
let saldoVitorias
let rank

// Função responsável por calcular o saldo final
function calcularPontos(venceu, perdeu){
    let pontos = venceu - perdeu
    return pontos;
}

// variável que armazena o retorno da Função saldo()
saldoVitorias = calcularPontos(vitorias, derrotas)

// Estrutura de Decisão
if(saldoVitorias < 10){
    rank = "Ferro";
} else if(saldoVitorias >= 11 && saldoVitorias <= 20){
    rank = "Bronze";
} else if(saldoVitorias >= 21 && saldoVitorias <= 50){
    rank = "Prata";
} else if(saldoVitorias >= 51 && saldoVitorias <= 80){
    rank = "Ouro";
} else if(saldoVitorias >= 81 && saldoVitorias <= 90){
    rank = "Diamante";
} else if(saldoVitorias >= 91 && saldoVitorias <= 100){
    rank = "Lendário";
} else if(saldoVitorias >= 101){
    rank = "Imortal";
}

// Saída
console.log(`O Herói tem o saldo de ${saldoVitorias} vitorias e está no rank ${rank}`)

