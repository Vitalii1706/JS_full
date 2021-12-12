const buttElemts = Array.from(document.querySelectorAll('.pagination__page'));
console.log(buttElemts);

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

buttElemts.map((btn) => btn.addEventListener('click', handleClick));
