const setButton = (buttonText) => {
  const elem = document.querySelector('body');
  return (elem.innerHTML = `<button>${buttonText}</button>`);
};

console.log(setButton('hello'));
export { setButton };
