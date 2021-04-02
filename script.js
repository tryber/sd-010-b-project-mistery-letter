const botaoCriarCarta = document.getElementById('criar-carta');
let inputRecebeCarta = document.getElementById('carta-texto');
const paragrafoCarta = document.getElementById('carta-gerada');
botaoCriarCarta.addEventListener('click', () => {
  const conteudoInput = inputRecebeCarta.value;
  for (let i = 0; i < conteudoInput.length; i += 1) {
    console.log(conteudoInput[i]);
  }
});
