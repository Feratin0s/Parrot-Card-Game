
// Numeros de cartas a ser jogadas no máximo 16
let Cartas = null;

// Array das cartas
let ArrayCards = [];

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
        addCard.innerHTML += `<div class="card" onclick="flip(this,${ArrayCards[i]}, ${i})"><img class="size back" src="./Photos/back.png" alt=""><img class="size esconder" src="./Photos/${ArrayCards[i]}.gif" alt=""></div>`;
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
    NumCards();
    return array;
}

// Função VIRAR CARTA
// Comparador de cartas
let cartaVirada = null;
let cartasSelecionadas = [];
let virar = null;

function flip(card, valor, unica) {
    virar = card;
    console.log('Letra da carta e valor: ' + valor + ' ' + unica);

    //Verifica o INDEX do for e o valor da carta, assim consegue diferenciar as cartas mesmo se elas forem iguais
    if (cartaVirada === null) {
        // Primeira carta clicada
        cartaVirada = [card, valor, unica];
        // Virar carta
        console.log(virar);
        virar.classList.add('selecionada');
        const mostrar = card.querySelector('.esconder');
        mostrar.style.display = 'block';
        const divEsconder = card.querySelector('.back');
        divEsconder.style.display = 'none';
    } else {
        // Segunda carta clicada
        if (cartaVirada[1] === valor && cartaVirada[2] !== unica) {
            // As cartas são iguais
            console.log("As cartas são iguais!");
            console.log(virar);
            virar.classList.add('selecionada');
            const mostrar = card.querySelector('.esconder');
            mostrar.style.display = 'block';
            const divEsconder = card.querySelector('.back');
            divEsconder.style.display = 'none';
        } else {

            //Mostra a carta
            console.log("As cartas são diferentes!");
            console.log(virar);
            virar.classList.add('selecionada');
            const mostrar = card.querySelector('.esconder');
            mostrar.style.display = 'block';
            const divEsconder = card.querySelector('.back');
            divEsconder.style.display = 'none';

            //Espera um pouco
            const SecondCard = cartaVirada[0];
            setTimeout(function () {
                
                // As cartas são diferentes
                virar.classList.remove('selecionada');
                const mostrar = card.querySelector('.esconder');
                mostrar.style.display = 'none';
                const divEsconder = card.querySelector('.back');
                divEsconder.style.display = 'block';

                // Segunda carta
                console.log(SecondCard);
                SecondCard.classList.remove('selecionada');
                const show = SecondCard.querySelector('.esconder');
                show.style.display = 'none';
                const Hide = SecondCard.querySelector('.back');
                Hide.style.display = 'block';
            }, 1000);
        }
        cartaVirada = null; // Reinicia a variável para a próxima jogada
    }

    cartasSelecionadas.push([valor, unica]);
}


