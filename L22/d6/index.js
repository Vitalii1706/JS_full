const buttElemts = Array.from(document.querySelectorAll('.btn'));
console.log(buttElemts);

const handleClick = (event) => {
  console.log(event.target.textContent);
};

buttElemts[0].addEventListener('click', handleClick);
buttElemts[1].addEventListener('click', handleClick);
