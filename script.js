const input = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const paragraph = document.getElementById('carta-gerada');
const counterWords = document.getElementById('carta-contador');
let arrayWords = [];
const arrayEstilo = ['newspaper', 'magazine1', 'magazine2'];
const arrayTamanho = ['medium', 'big', 'reallybig'];
const arrayRotacao = ['rotateleft', 'rotateright'];
const arrayInclinacao = ['skewleft', 'skewright'];
let storeRandomClass = '';

function numberBetween0And3() {
  return (Math.floor(Math.random() * (2.999 - 0) - 0));
}

function numberBetween0And2() {
  return (Math.floor(Math.random() * (1.999 - 0) - 0));
}

function clearSpans() {
  paragraph.innerHTML = '';
}

function pushWords() {
  let words = '';
  for (let x = 0; x <= input.value.length; x += 1) {
    if (input.value[x] !== ' ' && x !== input.value.length) {
      words += input.value[x];
    } else {
      arrayWords.push(words);
      words = '';
    }
  }
}

function clearArray() {
  if (arrayWords.length > 0) {
    arrayWords = [];
    pushWords();
  } else {
    pushWords();
  }
}

function chooseClasses() {
  storeRandomClass = '';
  storeRandomClass = arrayEstilo[numberBetween0And3()];
  storeRandomClass += ` ${arrayTamanho[numberBetween0And3()]}`;
  storeRandomClass += ` ${arrayRotacao[numberBetween0And2()]}`;
  storeRandomClass += ` ${arrayInclinacao[numberBetween0And2()]}`;
  return (storeRandomClass);
}

function insertWords() {
  for (let counter = 0; counter < arrayWords.length; counter += 1) {
    paragraph.appendChild(document.createElement('span'));
    paragraph.lastChild.innerText = arrayWords[counter];
    paragraph.lastChild.className = chooseClasses();
  }
}

function counterSpan() {
  counterWords.innerText = document.getElementsByTagName('span').length;
}

function functionsButton() {
  if (input.value === '' || input.value === ' ') {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    clearSpans();
    clearArray();
    insertWords();
    counterSpan();
  }
}

function pressButton() {
  button.addEventListener('click', () => {
    functionsButton();
  });
}

window.onload = function startScript() {
  pressButton();
};
