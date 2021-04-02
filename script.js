const botaoGerarCarta = document.getElementById('criar-carta');
const meuTexto = document.getElementById('carta-gerada');
const textoInput = document.getElementById('carta-texto');


botaoGerarCarta.addEventListener('click', () => {
  let conteudoInput = textoInput.value;
  let textoSeparado = conteudoInput.split(' ');
  for (let index = 0; index < textoSeparado.length; index += 1) {
    let criaSpan = document.createElement('span');
    criaSpan.innerHTML = textoSeparado[index];
    meuTexto.appendChild(criaSpan);
  }
})