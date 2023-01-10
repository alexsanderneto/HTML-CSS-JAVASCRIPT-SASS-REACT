/*
    Dica útil sobre programação, quando criar o programa, sempre se faz necessário.. saber o que ele precisa.

    Carne - 400g por pessoa + 6hrs - 650(adulto)/325(criança)
    Cerveja - 1200 ml por Pessoa + 6horas  - 2000ml(adulto)
    Refrigerante/agua - 1000ml por pessoa + 6hrs 1500ml(adulto)/750ml(criança)

    crianças valem por 0.5

*/

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementsByTagName("h2")[0]

function calcular(){
    
    let adultos =  inputAdultos.value
    let criancas = inputCriancas.value
    let duracao =  inputDuracao.value

    let carne = carnePP(duracao)
    let bebida = bebidasPP(duracao)
    let cerveja = cervejaPP(duracao)

    

    let qtdTotalCarne = carne  * adultos + (carne/ 2 * criancas);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalBebidas = bebida * adultos + (bebida/ 2 * criancas);
    
    resultado.innerHTML =  ` <p> ${qtdTotalCarne/1000}  kg de carne </p> `
    resultado.innerHTML += `<br><p> ${Math.ceil(qtdTotalCerveja/355)} latas de cerveja</p>`
    resultado.innerHTML += `<br><p> ${Math.ceil(qtdTotalBebidas/2000)}  Pets de 2l </p>`

}
function carnePP(duracao){
    
    if(duracao>=6){
        return 650;
    } else {
    return 400;
}
}
function cervejaPP(duracao){
    if(duracao>=6){
     return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(duracao){
    if(duracao>=6){
     return 1500;
    } else {
        return 1000;
    }
}

