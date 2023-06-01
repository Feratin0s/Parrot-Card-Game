
// Numeros de cartas a ser jogadas no máximo 16
let Cartas = null;

// Array das cartas
let ArrayCards = [];
console.log(ArrayCards);

// Código das STRINGS

var A = "A";
var B = "B";
var C = "C";
var D = "D";
var E = "E";
var F = "F";
var G = "G";
var H = "H";

// Começo de código, ao clicar no botão Play!

function Jogar() {
    Cartas = parseInt(prompt(`Quantas cartas você quer? Digite um número par entre 4 e 14`));

    if (typeof Cartas === 'number' && Cartas % 2 === 0 && Cartas >= 4 && Cartas <= 14) {
        const iniciar = document.querySelector(`.corpostart`);
        iniciar.style.display = (`none`);
        const parrot = document.querySelector(`.corpo`);
        parrot.style.display = (`block`);
        console.log(`PASSOU`);
        // Muda o nome da página
        document.title = "Parrot Card Game";
        //Aumenta a div pool
        aumentarDiv();
        ContabilizadorCartas();
    }
    else {
        alert(`Digite um número par válido entre 4 e 14`);
        console.log(`Repetiu`);
        Jogar();
    }
}

//Aumenta o tamanho da div POOL para responsividade 
var pool = aumentarDiv();

// ----------------------------------------------------------------------------------------------------

function aumentarDiv() { //Funciona bem em monitores grandes, mas precisa ajustar para monitores menores
    var pool = document.querySelector(`.pool`);
    var style = getComputedStyle(pool);
    var larguraAtual = parseInt(style.width);
    var novaLargura = larguraAtual + (75.5 * Cartas);
    pool.style.width = novaLargura + "px";
    return pool;
}

//For para adicionar cartas
//Adiciona div responsável pela carta
function NumCards() {
    console.log(ArrayCards);
    let addCard = document.querySelector(".pool");
    for (var i = 0; i < Cartas; i++) {
        addCard.innerHTML += `<div class="card" onclick="flip(this)"><img class="size back" src="./Photos/back.png" alt=""><img class="size esconder" src="./Photos/${ArrayCards[i]}.gif" alt=""></div>`;
        console.log(ArrayCards[i]);
    }
}

// ---------------------------------------------------------------------------------------------------

function ContabilizadorCartas() {
    if (Cartas === 16) {
        ArrayCards = [A, A, B, B, C, C, D, D, E, E, F, F, G, G, H, H];
        EmbaralhaArray(ArrayCards);
    } else if (Cartas === 14) {
        ArrayCards = [A, A, B, B, C, C, D, D, E, E, F, F, G, G];
        EmbaralhaArray(ArrayCards);
    } else if (Cartas === 12) {
        ArrayCards = [A, A, B, B, C, C, D, D, E, E, F, F];
        EmbaralhaArray(ArrayCards);
    } else if (Cartas === 10) {
        ArrayCards = [A, A, B, B, C, C, D, D, E, E];
        EmbaralhaArray(ArrayCards);
    } else if (Cartas === 8) {
        ArrayCards = [A, A, B, B, C, C, D, D];
        EmbaralhaArray(ArrayCards);
    } else if (Cartas === 6) {
        ArrayCards = [A, A, B, B, C, C];
        EmbaralhaArray(ArrayCards);
    } else if (Cartas === 4) {
        ArrayCards = [A, A, B, B];
        EmbaralhaArray(ArrayCards);
    }
}

// Embaralhar as arrays - Função para embaralhar as cartas
function EmbaralhaArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    NumCards();
    return array;
}

// Função VIRAR CARTA

function flip(card) {
    const virar = card;
    virar.classList.add('selecionada');
    const mostrar = card.querySelector('.esconder');
    mostrar.style.display = 'block';
    const divEsconder = card.querySelector('.back');
    divEsconder.style.display = 'none';
}

