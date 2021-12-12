const inputElem = document.querySelector('.text-input');

const inputConsole = () => {
  console.log(inputElem.value);
};
inputElem.addEventListener('change', inputConsole);
