const Todo = require('../database/Todo');

module.exports = {
  getAll(root, args) {
    if (args.done) {
      return Todo.find({done: true}).exec();
    }
    return Todo.find({}).exec();
  },
  addTodo(root, args) {
    const todo = new Todo({
      name: args.name,
      done: args.done,
    });
    return todo.save();
  },
  completeTodo(root, args) {
    return Todo.findById(args.id).exec()
      .then((todo) => {
        todo.done = true;
        todo.completedAt = new Date();
        return todo.save();
      });
  }
}
