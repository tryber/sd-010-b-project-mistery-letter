const paiInputText = document.querySelector('#carta-gerada');
const criarCartaBtn = document.querySelector('#criar-carta');
const textInput = document.querySelector('#carta-texto');
const textCounter = document.querySelector('#carta-contador');
let whitecount = 0;
const classesEstilo = ['newspaper', 'magazine1', 'magazine2'];
const classesTamanho = ['medium', 'big', 'reallybig'];
const classesRotacao = ['rotateleft', 'rotateright'];
const classesInclinacao = ['skewleft', 'skewright'];

const estilo = (createSpan) => {
  const random = Math.floor(Math.random() * 3);
  createSpan.classList.add(classesEstilo[random]);
};



const tamanho = (createSpan) => {
  const random = Math.floor(Math.random() * 3);
  createSpan.classList.add(classesTamanho[random]);
};

const rotacao = (createSpan) => {
  const random = Math.floor(Math.random() * 2);
  createSpan.classList.add(classesRotacao[random]);
};

const inclinacao = (createSpan) => {
  const random = Math.floor(Math.random() * 2);
  createSpan.classList.add(classesInclinacao[random]);
};

const criarFrase = () => {
  let text = textInput.value;
  text = text.split(' ');
  for (let index = 0; index < text.length; index += 1) {
    const createSpan = document.createElement('span');
    createSpan.innerHTML = text[index];
    createSpan.style.marginLeft = '7px';
    createSpan.style.marginTop = '10px';
    estilo(createSpan);
    tamanho(createSpan);
    rotacao(createSpan);
    inclinacao(createSpan);
    createSpan.classList.add('control');
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

const trocaEstiloAoClicar = () => {
  paiInputText.addEventListener('click', (event) => {
    if (event.target.classList.contains('control')) {
      const random = Math.floor(Math.random() * 3);
      event.target.classList.toggle(classesEstilo[random]);
      event.target.classList.toggle(classesTamanho[random]);
      event.target.classList.toggle(classesRotacao[random]);
      event.target.classList.toggle(classesInclinacao[random]);
    }
  });
};

window.onload = () => {
  createBtnClick();
  textCounterFunction();
  trocaEstiloAoClicar();
};
