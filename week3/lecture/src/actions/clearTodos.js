'use strict'
function clearTodos(todo, request, response){
  todo.clearTodos();
  todo.read()
    .then(todos => {
      response.json({ todos });
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = clearTodos;