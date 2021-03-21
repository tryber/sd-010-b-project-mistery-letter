const para = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');
const btnGerar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
const contador = document.getElementById('conta-palavra');
let classesCarta = ['skewright', 'skewleft', 'rotateright', 'rotateleft', 'reallybig', 'big', 'medium', 'magazine2', 'magazine1', 'newspaper'];
let classAleatorio = Math.floor(Math.random()*classesCarta.length);
let spanClass;


function criarCarta() {
  btnGerar.addEventListener('click', function(){
    let frase = input.value;
    let arrInput = frase.split(' ');
    paragrafo.innerHTML = '';
    if (input.value == '') {
      return para.innerText ='Por favor, digite o conteúdo da carta.';
    } 
    console.log('1');
    for (let i = 0; i < arrInput.length; i++) {
      let novoSpan = document.createElement('span');
      let classAleatorio = Math.floor(Math.random()*classesCarta.length);
      paragrafo.appendChild(novoSpan);
      novoSpan.innerHTML = arrInput[i];
      novoSpan.classList.add(classesCarta[classAleatorio]);
    }  
    mudarClass();
    // contaPalavras();
  });
}
criarCarta();

function verificaInput() {
  if (input.value == '') {
    para.innerHTML ='Por favor, digite o conteúdo da carta.';
    return;
  }
}
function mudarClass() {
  spanClass = document.getElementsByTagName('span');
  for (let i = 0; i < spanClass.length; i++) {
    spanClass[i].addEventListener('click', function(event) {
      let classAleatorio = Math.floor(Math.random()*classesCarta.length);
      event.target.removeAttribute('class');
      event.target.classList.add(classesCarta[classAleatorio]);
    });
  }
}
// function contaPalavras() {
//   contador.innerText = ;
// }
