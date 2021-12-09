const setButton = (buttonText) => {
  const elem = document.querySelector('body');
  buttonText = '<button>button text</button>';
  elem.innerHTML = buttonText;

  return elem;
};

export { setButton };
