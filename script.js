const classes = ['newspaper', 'magazine1', 'magazine2', 'medium',
  'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
const generateLetter = () => {
  const inputValue = document.querySelector('#carta-texto').value;
  const spanArray = inputValue.split(' ');
  const text = document.querySelector('#carta-gerada');
  if (inputValue.trim() === '') {
    text.innerText = 'por favor, digite o conteúdo da carta.';
    return false;
  }
  text.innerText = '';
  const contador = document.querySelector('#carta-contador');
  contador.innerText = spanArray.length;
  spanArray.forEach((word) => {
    const randonClassNumber = Math.floor(Math.random() * classes.length);
    const spanElement = document.createElement('span');
    spanElement.innerHTML = word;
    spanElement.className = classes[randonClassNumber];
    text.appendChild(spanElement);
  });
};
const text = document.querySelector('#carta-gerada');
text.addEventListener('click', (event) => {
  const randonClassNumber = Math.floor(Math.random() * classes.length);
  event.target.className = classes[randonClassNumber];
});
const generateBtn = document.querySelector('#criar-carta');
generateBtn.addEventListener('click', generateLetter);
