const Todo = require('../database/Todo');

module.exports = () => (
  Todo.find({}).exec()
);
