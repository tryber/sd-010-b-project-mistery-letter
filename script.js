const inputTextCart = document.querySelector('#carta-texto');
const textoMisterioso = document.querySelector('#carta-gerada');
const btnGeraCarta = document.querySelector('#criar-carta');
const contadorLetras = document.querySelector('#carta-contador');

function getInput() {
  btnGeraCarta.addEventListener('click', () => {
    textoMisterioso.innerHTML = '';
    if (inputTextCart.value === '' || inputTextCart.value === ' ' || inputTextCart.value === null) {
      textoMisterioso.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      let geraTexto = inputTextCart.value;
      geraTexto = geraTexto.split(' ');
      for (let i = 0; i < geraTexto.length; i += 1) {
        const criarspan = document.createElement('span');
        criarspan.innerText = geraTexto[i];
        textoMisterioso.appendChild(criarspan);
      }
    }
  });
}

window.onload = () => {
  getInput();
};
