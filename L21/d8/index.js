function finishList() {
  const elemUl = document.querySelector('.list');
  const elemLi = document.querySelector('.special');
  const li1 = document.createElement('li');
  li1.textContent = 1;
  elemUl.prepend(li1);
  const li8 = document.createElement('li');
  li8.textContent = 8;
  elemUl.append(li8);
  li4 = document.createElement('li');
  li4.textContent = 4;
  elemLi.before(li4);
  li6 = document.createElement('li');
  li6.textContent = 6;
  elemLi.after(li6);
}
finishList();

export { finishList };
