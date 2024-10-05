/*## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/

let quantidadeDeVitorias = 52;
let quantidadeDeDerrotas = 1;


let saldoVitorias = ranked(quantidadeDeVitorias, quantidadeDeDerrotas)
let leval = saldo(saldoVitorias)




function ranked(vitorias, derrotas){
    return vitorias - derrotas
}

function saldo(total){
    if(total <= 10){
        nivel = "Ferro"
    }
    else if(total >= 11 && total <= 20){
        nivel = "Bronze"
    }
    else if(total >= 21 && total <= 50){
        nivel = "Prata"
    }
    else if(total >= 51 && total <= 80){
        nivel = "Ouro"
    }
    else if(total >= 81 && total <= 90){
        nivel = "Diamante"
    }
    else if(total >= 91 && total <= 100){
        nivel = "Lendário"
    }
    else
        nivel = "Imortal"
    
    return nivel
}
console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + leval)
