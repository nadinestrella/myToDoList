'use strict';

interface Task {
  name: string;
  completed: boolean;
}

let tasks: Task[] = [
  { name: 'shop groceries', completed: true },
  { name: 'call to the doctor', completed: false },
  { name: 'read a book', completed: false },
];

const taskList = document.querySelector('.js-list') as HTMLUListElement;
const addTaskInput = document.querySelector(
  '.js-text-task-add'
) as HTMLInputElement;
const addBtn = document.querySelector('.js-btn-add') as HTMLFormElement;
const errorAdd = document.querySelector(
  '.js-error-add'
) as HTMLParagraphElement;

//LOCAL STORAGE

const setInLocalStorage = () => {
  const stringigyTasks = JSON.stringify(tasks);
  localStorage.setItem('savedTasks', stringigyTasks);
};

const getFromLocalStorage = () => {
  const localStorageTasks = localStorage.getItem('savedTasks');

  if (localStorageTasks) {
    tasks = JSON.parse(localStorageTasks);
  }

  renderTasks();
};

//RENDER TASKS

const renderTasks = () => {
  let html = '';

  for (let index = 0; index < tasks.length; index++) {
    html += `<li class="${tasks[index].completed ? 'done' : ''}">`;
    html += `<label class="material-checkbox">`;
    html += `<input type='checkbox' class='js-check' id='${index}' ${
      tasks[index].completed ? 'checked' : ''
    }
    > `;
    html += `<span class="checkmark"></span>`;
    html += `<span class="text">${tasks[index].name}</span> `;
    html += `</label>`;
    html += `<button class='deleteBtn js-delete-btn' id='${index}'> X </button> `;
    html += `</li> `;
  }

  taskList.innerHTML = html;

  listenCheck();
  listenDelete();
};

//ADD TASK

const handleAdd = (event: Event) => {
  event.preventDefault();
  const addNewtask = addTaskInput.value;
  addTaskInput.value = '';

  if (addNewtask !== '') {
    const newTask: Task = { name: addNewtask, completed: false };
    tasks.push(newTask);

    renderTasks();
  } else {
    errorAdd.innerHTML = `Add a valid task`;
  }

  setInLocalStorage();
};

const listenCheck = () => {
  const allCheckbox = document.querySelectorAll('.js-check');

  for (const check of allCheckbox) {
    check.addEventListener('change', handleCheck);
  }
};

function handleCheck(event: Event) {
  const target = event.target as HTMLInputElement;

  const id = parseInt(target.id);
  tasks[id].completed = !tasks[id].completed;

  renderTasks();
  setInLocalStorage();
}

const listenDelete = () => {
  const allDelete = document.querySelectorAll('.js-delete-btn');

  for (const deleteBtn of allDelete) {
    deleteBtn.addEventListener('click', handleDelete);
  }
};

function handleDelete(event: Event) {
  const target = event.target as HTMLButtonElement;
  const deleteTaskId = parseInt(target.id);

  if (!isNaN(deleteTaskId)) {
    tasks.splice(deleteTaskId, 1);

    renderTasks();
    setInLocalStorage();
  }
}

addBtn.addEventListener('submit', handleAdd);

getFromLocalStorage();
