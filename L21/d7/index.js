const getTitle = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};

getItemsList();

const getItemsArray = () => {
  const nodeList = document.querySelectorAll('.tool');
  const elementsArray = Array.from(nodeList);
  console.dir(elementsArray);
  return elementsArray;
};
getItemsArray();

//export { getItemsList, getItemsArray };
