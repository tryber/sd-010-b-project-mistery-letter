
const para = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');
const btnGerar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
let classesCarta = ['skewright', 'skewleft', 'rotateright', 'rotateleft', 'reallybig', 'big', 'medium', 'magazine2', 'magazine1', 'newspaper'];
let classAleatorio = Math.floor(Math.random()*classesCarta.length - 1);
function criarCarta() {
  btnGerar.addEventListener('click', function(event){
    let frase = input.value;
    let arrInput = frase.split(' ');
    verificaInput();
    for (let i = 0; i < arrInput.length; i++) {
      let novoSpan = document.createElement('span');
      let classAleatorio = Math.floor(Math.random()*classesCarta.length - 1);
      paragrafo.appendChild(novoSpan);
      novoSpan.innerHTML = arrInput[i] + ' ';
      novoSpan.classList.add(classesCarta[classAleatorio]);
    }
  });
}
criarCarta();

function verificaInput() {
  if (input.value == '') {
    para.innerHTML ='Por favor, digite o conteúdo da carta';
  }
}
