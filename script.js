const paragrafoResultado = document.querySelector('#carta-gerada');

function removeSpan() {
  const span = document.querySelectorAll('span');
  for (let index = 0; index < span.length; index += 1) {
    paragrafoResultado.firstChild.remove();
  }
}
const inputText = document.querySelector('#carta-texto');

const btnGerarCarta = document.querySelector('#criar-carta');
btnGerarCarta.addEventListener('click', () => {
  removeSpan();
  const palavrasSeparadas = inputText.value.split(' ');
  for (let index = 0; index < palavrasSeparadas.length; index += 1) {
    if (palavrasSeparadas[0] !== ' ' && palavrasSeparadas[0] !== '') {
      const spanResultado = document.createElement('span');
      spanResultado.innerHTML = palavrasSeparadas[index];
      paragrafoResultado.appendChild(spanResultado);
    } else {
      paragrafoResultado.innerHTML = 'Por favor, digite o conteúdo da carta.';
    }
  }
});
