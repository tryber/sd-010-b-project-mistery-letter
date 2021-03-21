let novoSpan = document.createElement('span');
const para = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');
const btnGerar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
let classesCarta = ['skewright', 'skewleft', 'rotateright', 'rotateleft', 'reallybig', 'big', 'medium', 'magazine2', 'magazine1', 'newspaper'];
let classAleatorio = Math.floor(Math.random()*classesCarta.length - 1)
function criarCarta() {
  btnGerar.addEventListener('click', function(event){
    verificaInput();
    paragrafo.appendChild(novoSpan);
    novoSpan.innerHTML = input.value;
    novoSpan.classList.add(classesCarta[classAleatorio]);
  });
}
criarCarta();

function verificaInput() {
  if (input.value == '') {
    para.innerHTML ='Por favor, digite o conteúdo da carta';
  }
}