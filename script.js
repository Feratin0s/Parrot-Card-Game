
// Numeros de cartas a ser jogadas no máximo 16
let Cartas = null;

// Array das cartas
let ArrayCards = [];

// Variável para armazenar os pares de cartas encontrados
let paresEncontrados = [];

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
setTimeout(function () {
    Jogar();
}, 1000);


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
        ContabilizadorCartas();
        VerificaLargura();
        setTimeout(iniciarTimer, 2000);
    }
    else {
        alert(`Digite um número par válido entre 4 e 14`);
        console.log(`Repetiu`);
        Jogar();
    }
} 1


//Aumenta o tamanho da div POOL para responsividade 
// ----------------------------------------------------------------------------------------------------
// Função para verificar o tamanho da TELA
function VerificaLargura() {
    var tamanhotela = window.innerWidth;
    console.log(tamanhotela);
    if (tamanhotela >= 1157) {
        aumentarDiv();
        ContadorPC();
    } else if (tamanhotela < 1157 && tamanhotela >= 840) {
        aumentarMedio();
        ContadorMobile();
    } else if (tamanhotela < 840 && tamanhotela >= 660) {
        aumentarMenor();
        ContadorMobile();
    } else if (tamanhotela < 660 && tamanhotela >= 500) {
        aumentarPequeno();
        ContadorMobile();
    } else if (tamanhotela < 500) {
        aumentarCel();
        ContadorMobile();
    }
}

// Função para telas maiores que 1157 pixeis de largura
function aumentarDiv() { //Funciona bem em monitores grandes divido por 2
    console.log(`Computador`);
    var pool = document.querySelector(`.pool`);
    var style = getComputedStyle(pool);
    var larguraAtual = parseInt(style.width);
    var novaLargura = larguraAtual + (75.5 * Cartas);
    pool.style.width = novaLargura + "px"; 1
    return pool;
}

// Função para telas menores que 1157 e maiores que 840 pixeis de largura
function aumentarMedio() { //Funciona bem em monitores menores divido por 3
    console.log(`Medio`);
    var pool = document.querySelector(`.pool`);
    pool.style.gap = '30px';
    var style = getComputedStyle(pool);
    var larguraAtual = parseInt(style.width);
    var novaLargura = larguraAtual + (50.4 * Cartas);
    pool.style.width = novaLargura + "px";
    return pool;
}

// Função para telas menores que 840 e maiores que 660 pixeis de largura
function aumentarMenor() { //Funciona bem em monitores menores divido por 4
    console.log('Menor');
    var pool = document.querySelector(`.pool`);
    pool.style.gap = '30px';
    var style = getComputedStyle(pool);
    var larguraAtual = parseInt(style.width);
    var novaLargura = larguraAtual + (37.85 * Cartas);
    pool.style.width = novaLargura + "px";
    return pool;
}

// Função para telas menores que 660 e maiores que 500 pixeis de largura
function aumentarPequeno() { //Funciona bem em monitores menores divido por 5
    console.log('Pequeno');
    var pool = document.querySelector(`.pool`);
    pool.style.gap = '30px';
    var style = getComputedStyle(pool);
    var larguraAtual = parseInt(style.width);
    var novaLargura = larguraAtual + (30.4 * Cartas);
    pool.style.width = novaLargura + "px";
    return pool;
}

// Função para telas menores que 500 e maiores que 0 pixeis de largura
function aumentarCel() { //Funciona bem em monitores menores divido por 5
    console.log('Cel');
    var pool = document.querySelector(`.pool`);
    pool.style.gap = '20px';
    var style = getComputedStyle(pool);
    var larguraAtual = parseInt(style.width);
    var novaLargura = larguraAtual + (117);
    pool.style.width = novaLargura + "px";
    return pool;
}

// ----------------------------------------------------------------------------------------------------

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
        14
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
//-----------------------------------------------------------------------------------------------------------------
// Função verificador de cartas repetidas
function VerificaCarta(valor) {
    if (!puxa.includes(valor)) {
        puxa.push(valor);
        console.log(puxa);
    }
}


// Função VIRAR CARTA
// Comparador de cartas
let cartaVirada = null;
let cartasSelecionadas = [];
let virar = null;

// Variaveis pra verificar cara
let indexFirst = null;
let indexSecond = null;
let puxa = [];

// Virar as cartas ao clicar

// Função VIRAR CARTA
function flip(card, valor, unica) {
    // Verifica se a carta já foi encontrada e evita que ela seja virada novamente
    if (card.classList.contains('encontrada')) {
        return;
    }

    // Verifica se a carta já está virada
    if (card.classList.contains('selecionada')) {
        return;
    }

    // Verifica se já foram selecionadas duas cartas
    if (cartasSelecionadas.length === 2) {
        return;
    }

    // Vira a carta selecionada
    card.classList.add('selecionada');
    const mostrar = card.querySelector('.esconder');
    mostrar.style.display = 'block';
    const divEsconder = card.querySelector('.back');
    divEsconder.style.display = 'none';

    // Armazena a carta selecionada
    cartasSelecionadas.push([valor, unica]);

    // Verifica se foram selecionadas duas cartas
    if (cartasSelecionadas.length === 2) {
        // Compara os valores das cartas selecionadas
        if (cartasSelecionadas[0][0] === cartasSelecionadas[1][0]) {
            // As cartas são iguais, marca como encontradas
            paresEncontrados.push(cartasSelecionadas[0][0]);
            const indexFirst = cartasSelecionadas[0][1];
            const indexSecond = cartasSelecionadas[1][1];
            VerificaCarta(indexFirst);
            VerificaCarta(indexSecond);
            Ganhou();
            cartasSelecionadas = []; // Limpa as cartas selecionadas
        } else {
            // As cartas são diferentes, aguarda um pouco e vira as cartas novamente
            setTimeout(function () {
                const firstCard = cartasSelecionadas[0][1];
                const secondCard = cartasSelecionadas[1][1];

                const firstCardElement = document.querySelector(`.card:nth-child(${firstCard + 1})`);
                const secondCardElement = document.querySelector(`.card:nth-child(${secondCard + 1})`);

                firstCardElement.classList.remove('selecionada');
                const showFirst = firstCardElement.querySelector('.esconder');
                showFirst.style.display = 'none';
                const hideFirst = firstCardElement.querySelector('.back');
                hideFirst.style.display = 'block';

                secondCardElement.classList.remove('selecionada');
                const showSecond = secondCardElement.querySelector('.esconder');
                showSecond.style.display = 'none';
                const hideSecond = secondCardElement.querySelector('.back');
                hideSecond.style.display = 'block';

                cartasSelecionadas = []; // Limpa as cartas selecionadas
            }, 1000);
        }
    }
}


//Ganhou 

function Ganhou() {
    setTimeout(function () {
        console.log(puxa.length);
        if (puxa.length === Cartas) {
            alert(`Voce ganhou`);
            Reiniciar();
            pararTimer();
            iniciarPiscar();
            Cartas = null;
        }
    }, 1000);
}

//Reset

function Reiniciar() {
    const Reset = prompt('Gostaria de reiniciar o jogo?')
    if (Reset === 'Sim') {
        location.reload();
    } else if (Reset === 'Não') {
        // Não faz nada
    } else {
        alert('Digite uma resposta válida "Sim ou Não"');
        Reiniciar();
    }

}

// Contador

var intervaloTimer;
var minutos = 0;
var segundos = 0;

function iniciarTimer() {
    if (!intervaloTimer) {
        intervaloTimer = setInterval(atualizarTimer, 1000);
    }
}

function pararTimer() {
    clearInterval(intervaloTimer);
    intervaloTimer = null;
}

function atualizarTimer() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    var tempoFormatado = formatarTempo(minutos, segundos);
    document.getElementById("timer").textContent = tempoFormatado;
}

function formatarTempo(minutos, segundos) {
    var minutosFormatados = minutos < 10 ? "0" + minutos : minutos;
    var segundosFormatados = segundos < 10 ? "0" + segundos : segundos;
    return minutosFormatados + ":" + segundosFormatados;
}

//-------------------------------------------------------------------------------------------------------------------------

var intervaloPiscar;
var contador = document.getElementById('.contador');

// Faz piscar
function piscarContador() {
    if (contador.style.display === "none") {
        contador.style.display = "block";
    } else {
        contador.style.display = "none";
    }
}

// Intervalo de tempo
function iniciarPiscar() {
    intervaloPiscar = setInterval(piscarContador, 500);
}

function ContadorMobile() {
    var Mobile = document.querySelector('.contadorcel');
    Mobile.innerHTML += '<div class="contador" id="contador"> <div class="timer cel"><span id="timer">00:00</span></div></div>'
}

function ContadorPC() {
    var PC = document.querySelector('.containercontador');
    PC.innerHTML += '<div class="contador" id="contador"> <div class="timer pc"><span id="timer">00:00</span></div></div>'
}
