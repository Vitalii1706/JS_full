const checkboxElem = document.querySelector('.task-status');

const checkboxState = () => {
  checkboxElem.checked ? console.log(true) : console.log(false);
};
checkboxElem.addEventListener('change', checkboxState);
