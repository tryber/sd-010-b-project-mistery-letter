const inpCartaTexto = document.getElementById('carta-texto');
const pCartaGerada = document.getElementById('carta-gerada');
const buttonCriarCarta = document.getElementById('criar-carta');

const cartaContador = document.getElementById('carta-contador');

function setClass() {
  /* Estilo */
  const styles = ['newspaper', 'magazine1', 'magazine2'];
  /* Tamanho */
  const sizes = ['medium', 'big', 'reallybig'];
  /* Rotação */
  const rotates = ['rotateleft', 'rotateright'];
  /* Inclinação */
  const inclis = ['skewleft', 'skewright'];
  const indexStyles = Math.floor(Math.random() * 2);
  const indexSizes = Math.floor(Math.random() * 2);
  const indexRotates = Math.floor(Math.random() * 1);
  const indexInclis = Math.floor(Math.random() * 1);
  return `${styles[indexStyles]} 
  ${sizes[indexSizes]} ${rotates[indexRotates]} ${inclis[indexInclis]}`;
}

function verifyWhiteSpaces(input) {
  let messege = null;
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === ' ') {
      messege = true;
    } else { messege = false; }
  }
  return messege;
}

function spaceWhiteOrEmpty(input) {
  let messege = null;
  messege = verifyWhiteSpaces(input);
  if (input === ' ') {
    messege = true;
  }
  if (input === '') {
    messege = true;
  }
  if (messege) {
    return true;
  }
}

function generatorLetter() {
  pCartaGerada.innerHTML = '';
  if (spaceWhiteOrEmpty(inpCartaTexto.value)) {
    pCartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    let spans = [];
    spans = inpCartaTexto.value.split(' ');
    cartaContador.innerText = spans.length;
    for (let index = 0; index < spans.length; index += 1) {
      const span = document.createElement('span');
      span.innerText = spans[index];
      span.className = setClass();
      pCartaGerada.appendChild(span);
    }
  }
}

buttonCriarCarta.addEventListener('click', generatorLetter);
