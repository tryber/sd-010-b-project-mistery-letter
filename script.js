const botaoCriarCarta = document.getElementById('criar-carta');
let inputRecebeCarta = document.getElementById('carta-texto');
const paragrafoCarta = document.getElementById('carta-gerada');

botaoCriarCarta.addEventListener('click', () => {
  let conteudo = inputRecebeCarta.value;
  let conteudoSeparado = conteudo.split(' ');
  for (let i = 0; i < conteudoSeparado.length; i += 1) {
    let span = document.createElement('span');
    span.innerText = `${conteudoSeparado[i]} `;
    paragrafoCarta.appendChild(span);
  }
});
