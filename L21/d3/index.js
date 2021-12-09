const getTitle = () => {
  const elem = document.querySelector('.title');
  return elem.textContent;
};

getTitle();

const getDescription = () => {
  const elem = document.querySelector('.about');
  return elem.innerText;
};

getDescription();

const getPlans = () => {
  const elem = document.querySelector('.plans');
  return elem.innerHTML;
};

getPlans();

const getGoal = () => {
  const elem = document.querySelector('.goal');
  return elem.outerHTML;
};

getGoal();

export { getTitle, getDescription, getPlans, getGoal };
