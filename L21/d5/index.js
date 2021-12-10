const setButton = (buttonText) => {
  const elem = document.querySelector('body');
  return (elem.innerHTML = buttonText);
};

setButton('<button>button text</button>');
export { setButton };
