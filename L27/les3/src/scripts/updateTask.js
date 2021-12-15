import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const handleClick = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const taskList = getItem('tasksList');
  const newTaskList = taskList.map((task) => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
      };
    }
    return task;
  });
  setItem('tasksList', newTaskList);

  renderTasks();
};
