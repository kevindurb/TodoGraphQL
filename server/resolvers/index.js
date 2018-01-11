const users = require('./users');
const todos = require('./todos');
const scalars = require('./scalars');

module.exports = {
  Query: {
    todos: todos.getAll,
    users: users.getAll,
  },
  Mutation: {
    addTodo: todos.addTodo,
    completeTodo: todos.completeTodo,
    assignUserToTodo: todos.assignUserToTodo,
    addUser: users.addUser,
  },
  Date: scalars.Date,
};
