import { initToDoListHandlers } from './toDoList.js';
import { renderTasks } from './renderer.js';

document.addEventListener(
  'DOMContentLoaded',
  () => initToDoListHandlers(),
  renderTasks()
);

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);
/*
const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

tasks.forEach((item, i) => {
  item.id = i + 1;
});

const renderTasks = (tasksList) => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const addTask = () => {
  const inputElem = document.querySelector('.task-input');
  const task = {
    text: inputElem.value,
    done: false,
  };
  if (inputElem.value === '') {
    return;
  }
  tasks.push(task);
  tasks.forEach((item, i) => {
    item.id = i + 1;
  });
  renderTasks(tasks);
  inputElem.value = '';
};

const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', addTask);

const handleClick = (event) => {
  const clickedChecbox = event.target.id;
  tasks.forEach((el) => {
    if (el.id === +clickedChecbox) {
      return el.done === false ? (el.done = true) : (el.done = false);
    }
  });

  return renderTasks(tasks);
};
listElem.addEventListener('click', handleClick);

renderTasks(tasks);
*/