const createButton = (buttonText) => {
  const elem = document.querySelector('body');
  const butt = document.createElement('button');
  butt.textContent = buttonText;
  elem.append(butt);
  return elem;
};

export { createButton };
