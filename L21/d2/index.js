const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

getItemsList();

const getItemsArray = () => {
  const nodeList = document.querySelectorAll('.tool');
  const elementsArray = Array.from(nodeList);
  console.dir(elementsArray);
  return elementsArray;
};
getItemsArray();

export { getitemsList, getitemsList };
