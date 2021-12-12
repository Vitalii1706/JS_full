const buttElem = document.querySelector('.single-use-btn');

const singleBtn = () => {
  console.log('clicked');
  buttElem.removeEventListener('click', singleBtn);
};

buttElem.addEventListener('click', singleBtn);
