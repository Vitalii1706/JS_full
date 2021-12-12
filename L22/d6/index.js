const clearList = () => {
  const element = document.querySelector('.categories');
  console.dir(element);
  return (element.innerHTML = '');
};

export { clearList };
