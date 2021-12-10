const clearList = () => {
  const element = document.querySelectorAll('.categories');
  console.dir(element);
  return (element.innerHTML = '');
};

clearList();

export { clearList };
