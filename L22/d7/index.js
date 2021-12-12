const inputElem = document.querySelector('.text-input');

const inputConsole = (event) => {
  console.log(event.target.value);
};
inputElem.addEventListener('change', inputConsole);
