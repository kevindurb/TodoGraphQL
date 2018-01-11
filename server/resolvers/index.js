module.exports = {
  Query: {
    todos: require('./todos').getAll,
  },
  Mutation: {
    addTodo: require('./todos').addTodo,
    completeTodo: require('./todos').completeTodo,
  },
  Date: require('./scalars').Date,
};
