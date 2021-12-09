const setButton = (buttonText) => {
  const elem = document.querySelector('body');
  elem.innerHTML = buttonText;

  return elem;
};
const buttonText = '<button>button text</button>';

export { setButton };
