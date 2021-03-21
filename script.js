const inputTextCart = document.querySelector('#carta-texto');
const textoMisterioso = document.querySelector('#carta-gerada');
const btnGeraCarta = document.querySelector('#criar-carta');
const contadorLetras = document.querySelector('#carta-contador');

// function checkVazio() {
//   if (inputTextCart.value === '' || inputTextCart.value === ' ' || inputTextCart.value === null) {
//     textoMisterioso.innerText = 'Por favor, digite o conteúdo da carta.';
//   }
// }

function getInput() {
  btnGeraCarta.addEventListener('click', () => {
    const geraTexto = inputTextCart.value;
    if (inputTextCart.value === '' || inputTextCart.value === ' ' || inputTextCart.value === null) {
      textoMisterioso.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      textoMisterioso.innerText = geraTexto;
    }
  });
}

window.onload = () => {
  getInput();
};
