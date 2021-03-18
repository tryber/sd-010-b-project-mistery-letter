const letterInput = document.querySelector('#carta-texto');
const createBtn = document.querySelector('#criar-carta');
const letterContainer = document.querySelector('#carta-gerada');
const wordCounter = document.querySelector('#carta-contador');

const styles = [
  'newspaper',
  'magazine1',
  'magazine2',
  'medium',
  'big',
  'reallybig',
  'rotateleft',
  'rotateright',
  'skewleft',
  'skewright',
];

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

function randomClasses(element) {
  const size = styles.length;
  element.removeAttribute('class');
  element.classList.add(styles[randomNum(size)], styles[randomNum(size)], styles[randomNum(size)]);
}

function createLetter() {
  letterContainer.innerHTML = '';
  const words = letterInput.value.trim().split(' ');
  if (!letterInput.value.trim()) {
    letterContainer.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  for (let i = 0; i < words.length; i += 1) {
    const word = document.createElement('span');
    randomClasses(word);
    word.innerHTML = words[i];
    word.addEventListener('click', () => randomClasses(word));
    letterContainer.appendChild(word);
  }
  wordCounter.innerHTML = words.length;
}

window.onload = () => {
  createBtn.addEventListener('click', createLetter);
};
