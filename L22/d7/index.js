const checkboxElem = document.querySelector('.task-status');

const checkboxState = (event) => {
  event.target.checked ? console.log(true) : console.log(false);
};
checkboxElem.addEventListener('change', checkboxState);
