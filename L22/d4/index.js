const clickButt = document.querySelector('.search__btn');
const inputElem = document.querySelector('.search__input');

const inputConsole = () => {
  console.log(inputElem.value);
};

clickButt.addEventListener('click', inputConsole);
