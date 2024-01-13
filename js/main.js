'use strict';

const list = document.querySelector ('.js-list');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true, id:0 },
    { name: 'Comprar pilas', completed: true, id:1 },
    { name: 'Poner una lavadora de blancos', completed: true, id:2 },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false, id:3
    },
  ];

  // list.innerHTML = `<li><input type="checkbox"  id="input" name="input" class="task-input js-text-task-filter" checked><label for="input">Recoger setas en el campo</label></li>`;
/*
  list.innerHTML = 
  `<li><input type="checkbox" 
   id="input" 
   name="input" 
   class="task-input js-text-task-filter">
   <label for="input"> ${tasks[0].name} </label></li>`+

   `<li><input type="checkbox" 
   id="input" 
   name="input" 
   class="task-input js-text-task-filter">
   <label for="input"> ${tasks[1].name} </label></li>`+

   `<li><input type="checkbox" 
   id="input" 
   name="input" 
   class="task-input js-text-task-filter">
   <label for="input"> ${tasks[2].name} </label></li>`+

   `<li><input type="checkbox" 
   id="input" 
   name="input" 
   class="task-input js-text-task-filter">
   <label for="input"> ${tasks[3].name} </label></li>`
   
*/
  
//NO ENTIENDO PARA QUE QUEREMOS EL TASK ID. PORQUE SALE IGUAL PINTADO 

 function renderList () {
  for (const task of tasks){
  
  if(task.completed) {
    list.innerHTML += 
    `<li class='tachado js-li' name='${task.id}'><input 
    type="checkbox" 
    id="${task.id}" 
    name="input" 
    class="task-input js-text-task-filter" checked> ${task.name}</li>
    `
  } else { 
    list.innerHTML +=  `<li class='js-li' name='${task.id}'><input 
  type="checkbox" 
  id="${task.id}" 
  name="input" 
  class="task-input js-text-task-filter" > ${task.name}</li>
  `
  }
}
//escuchar eventos del li
const li = document.querySelectorAll ('.js-li'); //li es un array 
  for (const eachli of li){
    eachli.addEventListener('click', handleClick);
    
  }
 };

 function handleClick (event) {
  console.log (event.currentTarget);
  console.log (event.target);

 }


  renderList();







/*
  console.log(list.innerHTML);
  console.log(tasks[0].name);
  console.log(tasks[1].name);
  console.log(tasks[0].completed);
*/
/*
  if (tasks[0].completed){
    list.classList.add('tachado'); // le estoy poniendo la clase a la ul y no al li, se me van a tachar todos
    list.setAttribute('checked', 'checked'); // igual, le estoy poniendo el atributo a la ul y no al li que es donde debería estar por eso no sale checked la caja
  } */
