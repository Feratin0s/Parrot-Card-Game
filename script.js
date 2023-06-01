
document.title = "Memory Game";
// Numeros de cartas a ser jogadas no máximo 14
let Cartas = null;
// Começo de código, ao clicar no botão Play!

function Jogar() {
    Cartas = parseInt(prompt(`Quantas cartas você quer? Digite um número par entre 4 e 16`));

    if (typeof Cartas === 'number' && Cartas % 2 === 0 && Cartas > 4 && Cartas <= 16) {
        const iniciar = document.querySelector(`.corpostart`);
        iniciar.style.display = (`none`);
        const parrot = document.querySelector(`.corpo`);
        parrot.style.display = (`block`);
        console.log(`PASSOU`);
        // Muda o nome da página
        document.title = "Parrot Card Game";
        //Aumenta a div pool
        aumentarDiv();
    }
    else {
        alert(`Digite um número par válido entre 4 e 16`);
        console.log(`Repetiu`);
        Jogar();
    }
}

//Aumenta o tamanho da div POOL para responsividade 
var pool = aumentarDiv();

function aumentarDiv() {
    var pool = document.querySelector(`.pool`);
    var style = getComputedStyle(pool);
    var larguraAtual = parseInt(style.width);
    var novaLargura = larguraAtual + (75.5 * Cartas);
    pool.style.width = novaLargura + "px";
    NumCards();
    return pool;
}

//For para adicionar cartas
//Adiciona div responsável pela carta
function NumCards() {
    for (var i = 0; i < Cartas; i++) {
        AdicionarCartas();
        console.log('Adicionando cartas');
    }
}

function AdicionarCartas(){
    let addCard = document.querySelector(".pool");
    addCard.innerHTML += `<div class="card"><img class="size" src="./Photos/back.png" alt=""></div>`
}


