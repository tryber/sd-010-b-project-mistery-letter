const inputTextCart = document.querySelector('#carta-texto');
const textoMisterioso = document.querySelector('#carta-gerada');
const btnGeraCarta = document.querySelector('#criar-carta');
const contadorLetras = document.querySelector('#carta-contador');

function getInput() {
  let geraTexto = inputTextCart.value;
  btnGeraCarta.addEventListener('click', () => {
    checkVazio();
    console.log(geraTexto);
  });
}

function checkVazio() {
  if (inputTextCart.value === '' || inputTextCart === ' ' || inputTextCart === null) {
    window.alert('Por favor, digite o conteúdo da carta.');
  }
}

window.onload = () => {
  getInput();
};
