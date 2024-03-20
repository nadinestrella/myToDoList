'use strict';

let tasks = [
  { name: 'shop groceries', completed: true  },
  { name: 'call to the doctor', completed: false },
  { name: 'read a book', completed: false },
];

const taskList = document.querySelector('.js-list');
const addTaskInput = document.querySelector('.js-text-task-add');
const addBtn = document.querySelector('.js-btn-add');
const errorAdd = document.querySelector('.js-error-add')



//LOCAL STORAGE


const setInLocalStorage = () => {
  const stringigyTasks = JSON.stringify(tasks)
  localStorage.setItem('savedTasks', stringigyTasks)
};
const getFromLocalStorage = () => {
  const localStorageTasks = localStorage.getItem('savedTasks');
  if(localStorageTasks !== null && localStorageTasks !== undefined) {
    tasks = JSON.parse(localStorageTasks);
    renderTasks();
  }else {
    renderTasks()
  }
};

/*
const removeTask = ()=>{
  localStorage.removeItem()
}; */





//RENDER TASKS

const renderTasks = () => {
  let html = '';

  for (let index = 0; index < tasks.length; index++) {
    html += `<li class="${tasks[index].completed ? 'done' : ''}">`;
    html += `<label class="material-checkbox">`;
    html += `<input type='checkbox' class='js-check' id='${index}' ${tasks[index].completed ? 'checked' : ''}
    > `;
    html += `<span class="checkmark"></span>`;
    html += `<span class="text">${tasks[index].name}</span> `
    html += `</label>`;
    html += `<button class='deleteBtn js-delete-btn' id='${index}'> X </button> `;
    html += `</li> `;
  }

  taskList.innerHTML = html;
  listenCheck();
  listenDelete();
};



//ADD TASK

const handleAdd = (event) => {
  event.preventDefault();
  const addNewtask = addTaskInput.value;
  console.log(addNewtask);
  addTaskInput.value = '';

  if (addNewtask !== '') {
    const newTask = { name: addNewtask, completed: false };
    tasks.push(newTask);
    console.log( newTask);
    console.log(tasks);
    renderTasks();
  } else {
    errorAdd.innerHTML = `Add a valid task`
    console.log('Add a valid task');
  }
  setInLocalStorage();
};

addBtn.addEventListener('click', handleAdd);

const listenCheck = () => {
  const allCheckbox = document.querySelectorAll('.js-check');
  for (const check of allCheckbox) {
    check.addEventListener('change', handleCheck);
  }
};

function handleCheck(event) {
  const id = event.target.id;
  tasks[id].completed = !tasks[id].completed;
  renderTasks();
  setInLocalStorage();
}

const listenDelete = () => {
  const allDelete = document.querySelectorAll('.js-delete-btn');
  for (const deleteBtn of allDelete){
    deleteBtn.addEventListener('click', handleDelete);
  }
}

function handleDelete(event){
  const deleteTaskId = event.target.id;
  console.log(deleteTaskId);
  if (deleteTaskId) {
    const index = parseInt(deleteTaskId);
    console.log(index)
    tasks.splice(index,1);
    console.log(tasks)
    renderTasks()
    setInLocalStorage() 
};
  
}

getFromLocalStorage()
