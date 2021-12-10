const setButton = (buttonText) => {
  const elem = document.querySelector('body');
  return (elem.innerHTML = buttonText);
};

export { setButton };
