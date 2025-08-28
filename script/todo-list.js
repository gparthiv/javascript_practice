const todoList = [];

putTodoOnHTML();
//this is how we generate HTML
function putTodoOnHTML() {
  let listHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObj = todoList[i];
    const { name, dueDate } = todoObj;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i},1);
      putTodoOnHTML();
    " class="delete-button">Delete</button>`;
    listHTML += html;
  }
  document.querySelector('.work-list').innerHTML = listHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.todo-input');
  const dateElement = document.querySelector('.day-tracker');
  const name = inputElement.value.trim();
  const dueDate = dateElement.value;

  //Skip if no input
  if(!name){
    return;
  }

  todoList.push({ name, dueDate });
  console.log(todoList);

  inputElement.value = '';//reset input
  dateElement.value = '';//reset input
  putTodoOnHTML();//adding on the screen 
}