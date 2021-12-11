function getSection(num) {
  const getSpan = document.querySelector(`span[data-number='${num}']`);
  const result = getSpan.closest('.box');
  return result.dataset.section;
}

//console.log(getSection(6));
export { getSection };
