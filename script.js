const btn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const output = document.getElementById('carta-gerada');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const skewGroup = ['skewleft', 'skewright'];

function createEl(tagName) {
  const element = document.createElement(tagName);
  return element;
}

function getRandom(array) {
  const len = array.length;
  const index = Math.floor(Math.random() * len);
  return array[index];
}

// Utilizei código de JONATHAN ROCHA como referência para esta função
// https://github.com/tryber/sd-010-b-project-mistery-letter/pull/5/commits/5fa6ea9e42310b385982a4dc7fa700320046e8cd
function generateTxt() {
  output.innerHTML = '';
  const txt = input.value.replace(/  +/g, ' ').trim();
  if (txt && txt !== ' ') {
    const arr = txt.split(' ');
    arr.forEach((word) => {
      const span = createEl('span');
      span.innerText = `${word}`;
      const classes = [
        getRandom(styleGroup), getRandom(sizeGroup), getRandom(rotationGroup), getRandom(skewGroup),
      ].join(' ');
      span.className = classes;
      output.appendChild(span);
    });
  } else {
    output.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

btn.addEventListener('click', generateTxt);
