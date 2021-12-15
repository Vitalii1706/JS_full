import { addTask } from './createTask.js';
import { listElem } from './storage.js';
import { handleClick } from './updateTask.js';

export const initToDoListHandlers = () => {
  const createBtn = document.querySelector('.create-task-btn');
  createBtn.addEventListener('click', addTask);
  listElem.addEventListener('click', handleClick);
};
