const squaredNumbers = () =>
  Array.from(document.querySelectorAll('.number')).map((el) => {
    el.setAttribute(
      'data-squared-number',
      el.dataset.number * el.dataset.number
    );
    return el;
  });

//squaredNumbers();
export { squaredNumbers };
