'use strict';

const Express = require('express');

// import our CRUD actions
const {
  createTodo,
  readTodos,
  updateTodo,
  deleteTodo,
  readTodo,
  clearTodos,
  markAsDone,
  markAsNotDone
} = require('./actions');

// requires todo.js
const Todo = require('./todo');

// Sets up port, file and sets TODO_SLUG = to string 'todos'
const FILENAME  = 'todos.json';
const PORT      = 3000;
const TODO_SLUG = 'todos';

//Instaniates class. 
const todo = new Todo(FILENAME);
// Sets up function to access Express methods. 
const app = new Express();

// Use built-in JSON middleware to automatically parse JSON
app.use(Express.json());


app.post(`/${TODO_SLUG}`,       createTodo.bind(null, todo));
app.get(`/${TODO_SLUG}`,        readTodos.bind(null, todo));
app.put(`/${TODO_SLUG}/:id`,    updateTodo.bind(null, todo));
app.delete(`/${TODO_SLUG}/:id`, deleteTodo.bind(null, todo));
app.get(`/${TODO_SLUG}/:id`, readTodo.bind(null, todo));
app.delete(`/${TODO_SLUG}`, clearTodos.bind(null, todo));
app.post(`/${TODO_SLUG}/:id/done`,  markAsDone.bind(null, todo));
app.delete(`/${TODO_SLUG}/:id/done`,  markAsNotDone.bind(null, todo));
//Sets express to listen for port. 
app.listen(PORT, error => {
  if (error)
    return console.error(error);

  console.log(`Server started on http://localhost:${PORT}`);
});
