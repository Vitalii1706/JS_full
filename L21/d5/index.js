const setButton = (buttonText) => {
  const elem = document.querySelector('body');
  elem.innerHTML = buttonText;
  return elem;
};
setButton('<button>button text</button>');
export { setButton };
