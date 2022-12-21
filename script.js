let pc = document.querySelector("#pc");
let res = document.querySelector("#res");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let ganhar = document.querySelector("#vitoria");
let perder = document.querySelector("#derrota");
let empatar = document.querySelector("#empate");

let btn = 0;
let vitoria = 0;
let empate = 0;
let derrota = 0;

//botões usuario
btn1.addEventListener('click', () => {
    btn = 1
})
btn2.addEventListener('click', () => {
    btn = 2;
})
btn3.addEventListener('click', () => {
    btn = 3;
})

let user = addEventListener('click', function () {

//definindo o pc
    let pcPlayer = Number(Math.round(Math.random() * 3));
    if (pcPlayer <= 0) {
        pcPlayer = Math.round(Math.random() * 3);
    }
    if (pcPlayer == 1) {
        pc.innerHTML = String.fromCodePoint(0x270C);
    } else if (pcPlayer == 2) {
        pc.innerHTML = String.fromCodePoint(0x270A);
    } else {
        pc.innerHTML = String.fromCodePoint(0x1F590);
    }

//logica do jogo
    if (btn == 1) {
        if (pcPlayer == 1) {
            empates()
        } else if (pcPlayer == 2) {
            derrotas();
        } else {
            vitorias()
        }
    }
    if (btn == 2) {
        if (pcPlayer == 2) {
            empates()
        } else if (pcPlayer == 3) {
            derrotas();
        } else {
            vitorias()
        }
    }
    if (btn == 3) {
        if (pcPlayer == 3) {
            empates()
        } else if (pcPlayer == 2) {
            vitorias()
        } else {
            derrotas()
        }
    }
})

//contadores e respostas
function derrotas() {
    res.innerHTML = "O COMPUTADOR VENCEU";
    derrota += 1;
    perder.innerHTML = `DERROTAS: ${derrota}`;
}

function vitorias() {
    res.innerHTML = "VOCÊ VENCEU";
    vitoria += 1;
    ganhar.innerHTML = `VITORIAS: ${vitoria}`;
}

function empates() {
    res.innerHTML = "EMPATE";
    empate += 1;
    empatar.innerHTML = `EMPATES: ${empate}`;
}