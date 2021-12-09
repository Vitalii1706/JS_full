const getTitle = () => {
  const elem = document.querySelector('.title');
  console.dir(elem.textContent);
  return elem.textContent;
};

const getDescription = () => {
  const elem = document.querySelector('.about');
  return elem.innerText;
};

const getPlans = () => {
  const elem = document.querySelector('.plans');
  return elem.innerHTML;
};

const getGoal = () => {
  const elem = document.querySelector('.goal');
  return elem.outerHTML;
};

export { getTitle, getDescription, getPlans, getGoal };
