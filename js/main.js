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

  ul.innerHTML(`<li><input type="checkbox" id="input" name="input" class="task-input js-text-task-filter"><label for="input">'Recoger setas en el campo'</label></li>`);
