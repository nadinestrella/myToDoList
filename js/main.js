'use strict';

const tasks = [
  {name: 'shop groceries', completed: true},
  {name: 'call doctor', completed: false}
];


const taskList = document.querySelector('.js-list');






const listenCheck =(event) =>{
  event.preventDefault()
  const allCheckbox = document.querySelectorAll('.js-check')
for (const check of allCheckbox){
  check.addEventListener('change', handleCheck);
}
  
}

const renderTasks = ()=>{

  taskList.innerHTML ='';

for (let index = 0; index < tasks.length; index++) {
  if(tasks[index].completed) {
    taskList.innerHTML += `<li class= 'done'>
  <input type='checkbox' class='js-check' id='${index}' checked >
  
  ${tasks[index].name}
  </li>`;

  }else{

  taskList.innerHTML += `<li >
  <input type='checkbox'  class='js-check' id='${index}' >
  
  ${tasks[index].name}
  </li>`;
  }
}
listenCheck();

};


function handleCheck (event){
  const id = event.target.id;
  console.log(id)
  tasks[id].completed = !tasks[id].completed;
  renderTasks()
}


renderTasks();

