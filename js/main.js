'use strict';

const list = document.querySelector ('.js-list');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];

  // list.innerHTML = `<li><input type="checkbox"  id="input" name="input" class="task-input js-text-task-filter" checked><label for="input">Recoger setas en el campo</label></li>`;

  list.innerHTML = `<li><input type="checkbox"  id="input" name="input" class="task-input js-text-task-filter"><label for="input"> ${tasks[0].name} </label></li>`;

  console.log(list.innerHTML);
  console.log(tasks[0].name);
  console.log(tasks[0].completed);

  if (tasks[0].completed){
    list.classList.add('tachado'); // le estoy poniendo la clase a la ul y no al li, se me van a tachar todos
    list.setAttribute('checked', 'checked'); // igual, le estoy poniendo el atributo a la ul y no al li que es donde debería estar por eso no sale checked la caja
  }
