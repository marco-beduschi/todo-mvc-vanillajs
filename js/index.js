const $ = {
  input: document.querySelector('[data-todo="new"'),
  list: document.querySelector('[data-todo="list"'),
};

const createTodo = (event) => {
  if (!event.target.value || event.code !== "Enter") {
    return;
  }

  const newTodoLI = document.createElement("li");
  const newTodoDIV = document.createElement("div");
  newTodoDIV.classList.add("view");
  const newTodoToggle = document.createElement("input");
  newTodoToggle.type = "checkbox";
  newTodoToggle.classList.add("toggle");
  const newTodo = document.createElement("label");
  newTodo.innerHTML = event.target.value;
  newTodo.innerHTML.trim();

  newTodoDIV.append(newTodoToggle);
  newTodoDIV.append(newTodo);
  newTodoLI.append(newTodoDIV);

  $.list.append(newTodoLI);
};

const appConnect = () => {
  $.input.addEventListener("keyup", createTodo);
};

appConnect();
