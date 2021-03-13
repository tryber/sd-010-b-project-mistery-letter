// elements
const createLetterBtn = document.querySelector('#criar-carta');
const createLetterText = document.querySelector('#carta-texto');
const generatedLetter = document.querySelector('#carta-gerada');
const wordCounter = document.querySelector('#carta-contador');

//                     Aux Functions
// split string
const getArrayFromString = (string) => string.split(' ');

// check if string is only spaces or empty
const checkContent = (array) => {
  if (!array.join('')) return true;
};

// get randomIndexes

const getRandomIndexesFromArray = (array) => {
  let mainValue = Math.floor(Math.random() * array.length);
  if (!mainValue) mainValue = 1;
  const arrayMap = {
    main: mainValue,
  };
  console.log(arrayMap.main);
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) === 'object') {
      arrayMap[`sub${index}`] = Math.floor(Math.random() * array[index].length);
    } else {
      arrayMap[index] = 0;
    }
  }
  return arrayMap;
};

//              Main functions

// count amount of words created

const countAmountOfWords = () => {
  const amount = document.querySelectorAll('span').length;
  wordCounter.innerText = amount;
};

// get random class

const getRandomClass = () => {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotateGroup = ['rotateleft', 'rotateright'];
  const skewGroup = ['skewleft', 'skewright'];
  const group = [styleGroup, sizeGroup, rotateGroup, skewGroup];
  const randomIndexes = getRandomIndexesFromArray(group);
  let allClassList = '';
  for (let index = 0; index <= randomIndexes.main; index += 1) {
    if (index !== randomIndexes.main) {
      allClassList += `${group[index][randomIndexes[`sub${index}`]]}`;
      allClassList += ' ';
    } else {
      allClassList += `${group[index][randomIndexes[`sub${index}`]]}`;
    }
  }
  return allClassList;
};

// changeStyle on click

const changeStyle = (event) => {
  const newClassSet = getRandomClass();
  event.target.setAttribute('class', newClassSet);
};

// Generate Misterious Letter

const genereteLetter = () => {
  generatedLetter.innerHTML = '';
  const phrase = createLetterText.value;
  const wordsArray = getArrayFromString(phrase);
  const isEmpty = checkContent(wordsArray);
  if (isEmpty) {
    const spanEl = document.createElement('span');
    spanEl.innerText = 'Por favor, digite o conteúdo da carta.';
    generatedLetter.appendChild(spanEl);
  } else {
    wordsArray.forEach((word) => {
      const wordClassList = getRandomClass();
      const spanEl = document.createElement('span');
      spanEl.setAttribute('class', wordClassList);
      spanEl.innerText = `${word}`;
      spanEl.addEventListener('click', (event) => changeStyle(event));
      generatedLetter.appendChild(spanEl);
    });
  }
};

//                      Listeners

// Create Letter Button Listener

const setCreateLetterBtn = () => {
  createLetterBtn.addEventListener('click', () => {
    genereteLetter();
    countAmountOfWords();
  });
};

//                    Loader
const loadButtons = () => {
  setCreateLetterBtn();
};

window.onload = () => {
  loadButtons();
};
