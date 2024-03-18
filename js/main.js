'use strict';

const tasks = [
  {name: 'shop groceries', completed: true},
  {name: 'call doctor', completed: false},
  {name: 'read a book', completed: false}
];


const taskList = document.querySelector('.js-list');
const addTaskInput = document.querySelector('.js-text-task-add');
const addBtn = document.querySelector('.js-btn-add');

const handleAdd =(event)=>{
  event.preventDefault()
  const addNewtask = addTaskInput.value
  console.log(addNewtask)
  addTaskInput.value = '';

  if (addNewtask !== '') {
    const newTask= {name:addNewtask, completed: false };
    tasks.push(newTask)
    console.log(newTask)
    console.log(tasks)
    renderTasks();

  }else {
    console.log ('Add a valid task')
  }


}


addBtn.addEventListener('click', handleAdd)

const listenCheck =() =>{
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
  <input type='checkbox' class='js-check' id='${index}' checked
   >
  
  ${tasks[index].name}
  <button class='deleteBtn' js-deleteBtn > Delete </button>
  </li>`;

  }else{

  taskList.innerHTML += `<li  >
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

