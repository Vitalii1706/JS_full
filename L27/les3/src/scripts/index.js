import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

const onSrorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onSrorageChange);