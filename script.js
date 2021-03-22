const newLetterButton = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');
const outputLetter = document.getElementById('carta-gerada');

function generatesRandomClasses() {
  const classes = [
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
  const randomClasses = Math.floor(Math.random() * classes.length);
  return classes[randomClasses];
}

function generateLetter() {
  newLetterButton.addEventListener('click', () => {
    outputLetter.innerHTML = '';
    if (inputLetter.value === '' || inputLetter.value === ' ' || inputLetter.value === null) {
      outputLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      outputLetter.innerHTML = '';
      const arrayString = inputLetter.value.split(' ');
      for (let index = 0; index < arrayString.length; index += 1) {
        const spanWord = document.createElement('span');
        spanWord.innerHTML = `${arrayString[index]}`;
        spanWord.classList.add(generatesRandomClasses());
        outputLetter.appendChild(spanWord);
      }
    }
  });
}
generateLetter();
