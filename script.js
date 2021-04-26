const input = document.getElementById('carta-texto');
const btnGerar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');
const classesCarta = ['skewright', 'skewleft', 'rotateright', 'rotateleft',
  'reallybig', 'big', 'medium', 'magazine2', 'magazine1', 'newspaper'];

function digiteAlgo() {
  paragrafo.innerText = 'por favor, digite o conteúdo da carta.';
}

function mudarClass() {
  const spanClass = document.getElementsByTagName('span');
  for (let i = 0; i < spanClass.length; i += 1) {
    spanClass[i].addEventListener('click', (event) => {
      const classAleatorio = Math.floor(Math.random() * classesCarta.length);
      event.target.removeAttribute('class');
      event.target.classList.add(classesCarta[classAleatorio]);
    });
  }
}

function contaPalavras() {
  const frase = input.value;
  const arrInput = frase.split(' ');
  contador.innerHTML = `Quantidade de palavras ${arrInput.length}`;
}

function criarCarta() {
  btnGerar.addEventListener('click', () => {
    const frase = input.value;
    const arrInput = frase.split(' ');
    paragrafo.innerHTML = '';
    if (input.value === '') {
      return digiteAlgo();
    }
    for (let i = 0; i < arrInput.length; i += 1) {
      const novoSpan = document.createElement('span');
      const classAleatorio = Math.floor(Math.random() * classesCarta.length);
      paragrafo.appendChild(novoSpan);
      novoSpan.innerHTML = arrInput[i];
      novoSpan.classList.add(classesCarta[classAleatorio]);
    }
    mudarClass();
    contaPalavras();
  });
}

window.onload = () => {
  criarCarta();
};
