'use strict';

const tasks = [
  {name: 'shop groceries', completed: true},
  {name: 'call doctor', completed: false}
]


const taskList = document.querySelector('.js-list')
const allCheckbox = document.querySelectorAll('.js-check')




for (let index = 0; index < tasks.length; index++) {
  if(tasks[index].completed) {
    taskList.innerHTML += `<li class= '${classCss}'>
  <input type='checkbox' checked class='js-check' id='${index}' >
  
  ${tasks[index].name}
  </li>`;

  }else{

  taskList.innerHTML += `<li class= '${classCss}'>
  <input type='checkbox'  class='js-check' id='${index}' >
  
  ${tasks[index].name}
  </li>`;
  }

}


function handleCheck (event){
  const id = event.target.id;
  tasks[id].completed = !tasks[id].completed;
}



for (const check of allCheckbox){
  check.addEventListener('change', handleCheck);
}

