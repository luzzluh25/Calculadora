//CÓDIGO PARA CALCULADORA BÁSICA

function insert (num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num
}
function clean() {
    document.getElementById('resultado').innerHTML = "";
}
function back() {
    var resultado = document.getElementById('resultado').innerHTML; //(var) -> variável número 
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

//CÓDIGO PARA CALCULADORA DE MÉDIA

let btnCalcular = document.querySelector('#btnCalcular')
btnCalcular.addEventListener('click', calcular);


function calcularMedia() {
    var n1, n2, n3, n4, media;

    n1 = document.getElementById('nota1').value;
    n2 = document.getElementById('nota2').value;
    n3 = document.getElementById('nota3').value;
    n4 = document.getElementById('nota4').value;

    media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4

    document.getElementById('media').innerText = media

    if (media === 0) {
        document.getElementById('status').innerText = `Infelizmente você zerou a prova :(`;
    } else if (media >= 0.1 && media <= 3) {
        document.getElementById('status').innerText = `Caramba, deu ruim, você obteve média ${media.toFixed(2)}! Estude mais e tente novamente!`;
    } else if (media >= 3.1 && media<= 5.9) {
        document.getElementById('status').innerText = `Você obteve média ${media.toFixed(2)}! Falta pouco para a média.`;
    } else if (media >= 6 && media <= 7) {
        document.getElementById('status').innerText = `Você está na média com ${media.toFixed(2)}`;
    } else if (media >= 7.1 && media <= 9.9) {
        document.getElementById('status').innerTextL = `Notão! Sua média é ${media.toFixed(2)}!`;
    } else if (media === 10) {
        document.getElementById('status').innerText = `Hoje é seu aniversário? Porque você está de parabéns! 10 de média`;
    } else {
        document.getElementById('status').innerText = `Nota inválida`;
    }
    
}



