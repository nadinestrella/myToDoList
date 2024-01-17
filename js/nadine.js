'use strict';

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

//1 PINTAR TAREAS

const taskList = document.querySelector('.task-list');
const btnFilter = document.querySelector('.js-btn-filter');
const inputFilter = document.querySelector('.js-text-task-filter');
//tengo array y quiero coger cada uno de esos datos y crear un elemento nuevo---> recorro el array (lo recorro con un bucle, renderTask)

//5 FILTRO POR PALABRAS
function handleFilter(event) {
  //filtro por palabras
  event.preventDefault();
  const valueInput = inputFilter.value;
  const arrayFilter = tasks.filter((task) => task.name.includes(valueInput));
  renderTasks(arrayFilter);
}
btnFilter.addEventListener('click', handleFilter);

//4 escucgar evento del check. creo un bucle para escuchar cada uno de los eventos
const listenCheck = () => {
  const allCheckbox = document.querySelectorAll('.js-check');
  for (const check of allCheckbox) {
    check.addEventListener('change', handleCheck); //esta funcion modifica el array para q modifique el completed
  }
};

//2 CREAR UN BUCLE QUE LO RECOJA Y APLIQUE LA CONDICION A UNO U OTROS.
const renderTasks = (tasks) => {
  //a esta funcion la llamamos cuando haga falta
  taskList.innerHTML = '';
  for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].completed) {
      taskList.innerHTML += `<li 
      class= 'tachado'>
      <input type='checkbox' 
      id='${index}' checked 
      class='js-check'> 
      ${tasks[index].name} 
      </li>`;
    } else {
      taskList.innerHTML += `<li> 
      <input type='checkbox' id='${index}' class='js-check'>
       ${tasks[index].name}
      </li>`;
    }
  }
  listenCheck();
};

//3 si la propiedad completed meterle la clase tachado

function handleCheck(event) {
  const id = event.target.id; //aqui sabemos donde ha hecho el click
  console.log(id);
  tasks[id].completed = !tasks[id].completed;
  console.log(tasks);
  renderTasks(tasks);
}

renderTasks(tasks);

/* 
pintar elementos en html
escuchcar eventos
una vez escichas cambias los datos basados en el evento 
volver a pintar, volver a escuchar

*/

//FORMA MAS BONITO DE HACERLO
/*
  for (let index = 0; index <tasks.length; index++){

   let classCss= tasks[index].completed ? 'tachado': null;

    taskList.innerHTML += `<li class='${classCss}'> ${tasks[index].name}
    </li>`; 
  } */

//con esto ya  aparece la lista