'use strict';

function markAsNotDone(todo, request, response){
  const id = request.params.id;
  todo.markAsNotDone(id).then( () => {return todo.findTodo(id)})
  .then((todo) => {
    response.status(200);
    response.json({todo});
  }).catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
}

module.exports = markAsNotDone;