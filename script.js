const newSpan = document.createElement('span');
const para = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');
const btnGerar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');

function criarCarta() {
  btnGerar.addEventListener('click', function(event){
    paragrafo.appendChild(newSpan);
  });
}
criarCarta();

    