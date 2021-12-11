function squaredNumbers() {
  const arrAtr = Array.from(document.querySelectorAll('.number')).map((el) => {
    const squarNum = el.dataset.number * el.dataset.number;
    el.setAttribute('data-squared-number', squarNum);
    return el;
  });
  return arrAtr;
}

//squaredNumbers();
export { squaredNumbers };
