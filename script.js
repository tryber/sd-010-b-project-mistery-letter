const classes = {
    estilo: ['newspaper', 'magazine1', 'magazine2'],
    tamanho: ['medium', 'big', 'reallybig'],
    rotação: ['rotateleft', 'rotateright'],
    inclinação:['skewleft', 'skewright']
}

function createLetter() {
  const btncreate = document.getElementById('criar-carta');
  const input = document.getElementById('carta-texto');
  const letter = document.getElementById('carta-gerada');
  btncreate.addEventListener('click', function () {
    clearLetter();
    const array = input.value.split(' ');
    if (array.lenght = 1 && array[0] === '') {
        letter.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      for (let palavra = 0; palavra < array.length; palavra += 1) {
        const span = document.createElement('span');
        span.innerText = array[palavra];
        span.classList.add(classes.estilo[Math.floor(Math.random() * 2.9)]);
        span.classList.add(classes.tamanho[Math.floor(Math.random() * 2.9)]);
        span.classList.add(classes.rotação[Math.floor(Math.random() * 1.9)]);
        span.classList.add(classes.inclinação[Math.floor(Math.random() * 1.9)]);
        letter.appendChild(span);
      }
      countWords();
    }
  })
}

createLetter();

function clearLetter() {
  const span = document.getElementsByTagName('span');
  while (span.length > 0){
    span[0].parentNode.removeChild(span[0])
  }

}


function countWords () {
  const span = document.getElementsByTagName('span');
  const counter = document.getElementById('carta-contador');
  counter.innerText = span.length
}

