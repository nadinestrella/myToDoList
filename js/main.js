"use strict";

const list = document.querySelector(".js-list");
const btnFilter = document.querySelector(".js-btn-filter");
const textTaskFilter = document.querySelector(".js-text-task-filter");
const GITHUB_USER = "nadinestrella";
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
    renderTasks(todo.results);
    console.log(todo);
    console.log(todo.results);
  });

function handleCheck(event) {
  const id = event.target.id;
  console.log(id);
  tasks[id].completed = !tasks[id].completed;
  console.log(tasks);
  renderTasks(tasks);
}

const listenCheck = () => {
  const allCheckbox = document.querySelectorAll(".js-check");
  for (const check of allCheckbox) {
    check.addEventListener("change", handleCheck);
  }
};

const renderTasks = (tasks) => {
  list.innerHTML = "";
  for (let index = 0; index < tasks.length; index++) {
    /*let classCss = tasks[index].completed ? 'tachado' : null;
  taskList.innerHTML += `<li class= "${classCss}"> 
    ${tasks[index].name}
  </li>`;*/
    if (tasks[index].completed) {
      //tasks[index].completed === true
      list.innerHTML += `<li class= "tachado"> 
    <input type="checkbox" class= "js-check" id="${index}" checked>
    ${tasks[index].name}
  </li>`;
    } else {
      list.innerHTML += `<li> 
    <input type="checkbox" class= "js-check" id="${index}">
    ${tasks[index].name}
  </li>`;
    }
  }
  listenCheck();
};

renderTasks(tasks);

//2 FILTRAR TAREAS
function handleFilter(event) {
  event.preventDefault();
  const valueInput = textTaskFilter.value;
  const arrayFilter = tasks.filter((task) => task.name.includes(valueInput));
  console.log(arrayFilter);
  renderTasks(arrayFilter);
}
btnFilter.addEventListener("click", handleFilter);
