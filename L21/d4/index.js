const getTitle = (text) => {
  const elem = document.querySelector('.title');
  elem.textContent = text;
  console.log(elem);
  return elem;
};

export { getTitle };
