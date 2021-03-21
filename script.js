const paiInputText = document.querySelector('#carta-gerada');
const criarCartaBtn = document.querySelector('#criar-carta');
const textInput = document.querySelector('#carta-texto');
const textCounter = document.querySelector('#carta-contador');
let whitecount = 0;

const criarFrase = () => {
  let text = textInput.value;
  text = text.split(' ');
  for (let index = 0; index < text.length; index += 1) {
    const createSpan = document.createElement('span');
    createSpan.innerHTML = text[index];
    paiInputText.appendChild(createSpan);
  }
};

const checkWhiteSpaces = () => {
  for (let i = 0; i < textInput.value.length; i += 1) {
    if (textInput.value[i] === ' ') {
      whitecount += 1;
    }
  }
};

const inputCheck = () => {
  checkWhiteSpaces();
  if (textInput.value === '' || textInput.value === ' ') {
    paiInputText.innerHTML = 'por favor, digite o conteúdo da carta.';
  }
  if (whitecount > 1 && textInput.value[0] === ' ') {
    paiInputText.innerHTML = 'por favor, digite o conteúdo da carta.';
  }
  criarFrase();
};

const createBtnClick = () => {
  criarCartaBtn.addEventListener('click', () => {
    paiInputText.innerHTML = '';
    inputCheck();
  });
};

const textCounterFunction = () => {
  textInput.addEventListener('keyup', () => {
    let text = textInput.value;
    text = text.split(' ');
    const maxCount = text.length;
    textCounter.innerHTML = `${maxCount}`;
  });
};

window.onload = () => {
  createBtnClick();
  textCounterFunction();
};
