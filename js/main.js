'use strict';

const list = document.querySelector('.js-list');
const btnFilter = document.querySelector('.js-btn-filter');
const textTaskFilter = document.querySelector('.js-text-task-filter');
const GITHUB_USER = 'nadinestrella';
const SERVER_URL = `https://dev.adalab.es/api/todo/`;

// const tasks = [
//     { name: 'Recoger setas en el campo', completed: true},
//     { name: 'Comprar pilas', completed: true},
//     { name: 'Poner una lavadora de blancos', completed: true},
//     { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false},
//   ];

let tasks = [];

fetch(SERVER_URL)
  .then((response) => response.json())
  .then((todo) => {
    tasks = todo.results; //llenar con lo q viene de la api
    renderTasks(tasks);
    console.log(todo);
    console.log(todo.results);
  });

const listenCheck = () => {
  const allCheckbox = document.querySelectorAll('.js-check');
  for (const check of allCheckbox) {
    check.addEventListener('change', handleCheck);
  }
};

const renderTasks = (tasks) => {
  list.innerHTML = '';
  for (let index = 0; index < tasks.length; index++) {
    /*let classCss = tasks[index].completed ? 'tachado' : null;
  taskList.innerHTML += `<li class= "${classCss}"> 
    ${tasks[index].name}
  </li>`;*/
    if (tasks[index].completed) {
      //tasks[index].completed === true
      list.innerHTML += `<li class= "tachado"> 
    <input type="checkbox" class= "js-check" id="${tasks[index].id}" checked>
    ${tasks[index].name}
  </li>`;
    } else {
      list.innerHTML += `<li> 
    <input type="checkbox" class= "js-check" id="${tasks[index].id}"> 
    ${tasks[index].name}
  </li>`;
    }
  }
  listenCheck();
  // importante que el id coincida con el id de la api task[index].id
};

function handleCheck(event) {
  const idTask = parseInt(event.target.id); //esto cambia a numero
  console.log(idTask);
  console.log(tasks);
  const indexTask = tasks.findIndex((task) => task.id === idTask);
  console.log(indexTask);
  tasks[indexTask].completed = !tasks[indexTask].completed; //si el id esta clickado la tacha y si no lo contario

  renderTasks(tasks);
}

renderTasks(tasks);

//2 FILTRAR TAREAS
function handleFilter(event) {
  event.preventDefault();
  const valueInput = textTaskFilter.value;
  const arrayFilter = tasks.filter((task) => task.name.includes(valueInput));
  console.log(arrayFilter);
  renderTasks(arrayFilter);
}
btnFilter.addEventListener('click', handleFilter);
