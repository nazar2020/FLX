const rootNode = document.getElementById('root');

let todoItems = JSON.parse(localStorage.getItem('taskList')) || [];

window.onload = history.pushState('', document.title, window.location.pathname);

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

// headings for all three pages
const mainHeading = '<h1>Simple TODO aplication</h1>';
const addHeading = '<h1>Add task</h1>';
const modifyHeading = '<h1>Modify item</h1>';

/********************** task list **********************/
const list = document.createElement('div');
const taskList = document.createElement('ul');
const doneList = document.createElement('ul');
const addTaskBtn = document.createElement('button');
list.classList.add('container');
addTaskBtn.id = 'add-btn';
addTaskBtn.classList.add('task-add');
addTaskBtn.textContent = 'Add new task';
taskList.classList.add('task-list');
doneList.classList.add('task-list', 'done');
list.append(addTaskBtn, taskList, doneList);
/******************* task list end ********************/

/*********************** form ************************/
const form = document.createElement('form');
const inputTask = document.createElement('input');
const cancelBtn = document.createElement('button');
const submitBtn = document.createElement('button');
form.id = 'form-task';
form.classList.add('task-form');
inputTask.type = 'text';
inputTask.id = 'input-task';
cancelBtn.id = 'cancel-btn';
cancelBtn.textContent = 'Cancel';
submitBtn.id = 'submit-btn';
submitBtn.disabled = true;
submitBtn.textContent = 'Save changes';
form.append(inputTask, cancelBtn, submitBtn);
/********************** form end **********************/


if (todoItems.length) {
  todoItems.forEach(todoItem => {
    const li = createTask(todoItem.description);
    if (todoItem.isDone) {
      doneList.insertAdjacentElement('beforeend', li);
    } else {
      taskList.insertAdjacentElement('beforeend', li);
    }
    setTaskData.call(li, todoItem);
  });
  taskHandler();
} 

// main event listeners
addTaskBtn.addEventListener('click', () => {
  location.hash = '/add';
});

cancelBtn.addEventListener('click', e => {
  e.preventDefault();
  submitBtn.removeEventListener('click', submitAdd);
  submitBtn.removeEventListener('click', submitModify);
  inputTask.value = '';
  removeHash();
});

inputTask.addEventListener('input', () => {
  if (!inputTask.value) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

render(mainHeading);

window.addEventListener('hashchange', () => {
  const reg = /^#\/modify\/\d+$/;
  if (location.hash === '#/add') {
    render(addHeading);
    addHandler();
  } else if (reg.test(location.hash)) {
    render(modifyHeading);
    modifyHandler()
  } else {
    history.pushState('', document.title, window.location.pathname);
    render(mainHeading);
    taskHandler();
  }
});

function submitAdd(e) {
  e.preventDefault();
  
  const taskName = inputTask.value;
  inputTask.value = '';
  
  addTask(taskName);
  removeHash();
  this.removeEventListener('click', submitAdd);
}

function submitModify(e) {
  e.preventDefault();

  const taskName = inputTask.value;
  inputTask.value = '';

  modifyTask(taskName);
  removeHash();
  this.removeEventListener('click', submitModify);
}

function addHandler() {
  submitBtn.disabled = true;
  submitBtn.addEventListener('click', submitAdd);
}

function modifyHandler() {
  submitBtn.disabled = true;
  submitBtn.addEventListener('click', submitModify);
}

// handle tasks
function taskHandler() {

  const tasks = taskList.querySelectorAll('.task');
  const dones = doneList.querySelectorAll('.task');

  function handle(task) {
    const checkbox = task.querySelector('.check-input');
    const taskName = task.querySelector('.task-name');
    const remove = task.querySelector('.delete-btn');
    const id = +task.dataset.id;
    
    function modify() {
      location.hash = `/modify/${id}`;
      inputTask.value = taskName.textContent;
    }

    taskName.addEventListener('click', modify);

    if (task.dataset.isDone === 'false') {
      checkbox.addEventListener('change', () => {
        checkbox.disabled = true;
        todoItems.forEach(item => {
          if (item.id === id) {
            item.isDone = true;
            setTaskData.call(task, item);
          }
        });
        localStorage.setItem('taskList', JSON.stringify(todoItems));
        taskName.classList.add('completed');
        taskName.removeEventListener('click', modify);
        taskList.removeChild(task);
        doneList.appendChild(task);
      });
    } else {
      checkbox.checked = true;
      checkbox.disabled = true;
      taskName.classList.add('completed');
      taskName.removeEventListener('click', modify);
    }
  
    remove.addEventListener('click', () => {
      todoItems = todoItems.filter(item => {
        if (item.id === id) {
          if (item.isDone) {
            doneList.removeChild(task);
          } else {
            taskList.removeChild(task);
          }
          return false;
        }
        return true;
      });
      localStorage.setItem('taskList', JSON.stringify(todoItems))
    });
  }

  tasks.forEach(handle);
  dones.forEach(handle);

}

// modify task description
function modifyTask(value) {
  const idLength = 5;
  const id = location.hash.slice(-idLength);
  const tasks = taskList.querySelectorAll('.task');
  
  tasks.forEach(task => {
    const taskName = task.querySelector('.task-name');
    
    if (task.dataset.id === id) {
      taskName.textContent = value;
      todoItems.forEach(item => {
        if (item.id === +id) {
          item.description = value;
          setTaskData.call(task, item);
        }
      });
      localStorage.setItem('taskList', JSON.stringify(todoItems));
    }
  });
}

// add new task to list
function addTask(value) {
  const li = createTask(value);
  const idLength = 5;
  const time = '' + new Date().getTime();
  const id = +time.slice(-idLength);
  const options = {
    isDone: false,
    id: id,
    description: value
  };
  
  setTaskData.call(li, options);
  todoItems.push(options);
  localStorage.setItem('taskList', JSON.stringify(todoItems));
  taskList.appendChild(li);
}

// set data- attribute to task
function setTaskData(data) {
  this.setAttribute('data-is-done', data.isDone);
  this.setAttribute('data-id', data.id);
  this.setAttribute('data-description', data.description);
}

// create task (li-element)
function createTask(value) {
  const li = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const checkBox = document.createElement('span');
  const name = document.createElement('span');
  const button = document.createElement('button');

  li.classList.add('task');
  label.classList.add('check');
  input.classList.add('check-input');
  input.setAttribute('type', 'checkbox');
  checkBox.classList.add('check-box');
  label.append(input, checkBox);
  name.classList.add('task-name');
  name.textContent = value;
  button.classList.add('delete-btn');
  li.append(label, name, button);

  return li;
}

// render page function
function render(heading) {
  const node = heading === mainHeading ? list : form;

  wrapper.innerHTML = heading;
  wrapper.appendChild(node);
  rootNode.appendChild(wrapper);
}

// remove hash function
function removeHash() {
  location.hash = '';
  history.pushState('', document.title, window.location.pathname);
}


