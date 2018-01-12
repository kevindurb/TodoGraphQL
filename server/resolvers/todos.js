const Todo = require('../database/Todo');
const User = require('../database/User');

module.exports = {
  getAll(root, args) {
    if ('done' in args) {
      return Todo.find({
        done: !!args.done,
      }).exec();
    }
    return Todo.find({}).exec();
  },
  getById(root, args) {
    return Todo.findById(args.id).exec();
  },
  addTodo(root, args) {
    const todo = new Todo({
      name: args.name,
      done: args.done,
    });
    return todo.save();
  },
  async completeTodo(root, args) {
    const todo = await Todo.findById(args.id).exec();

    todo.done = true;
    todo.completedAt = new Date();

    return todo.save();
  },
  async assignUserToTodo(root, args) {
    const [user, todo] = await Promise.all([
      User.findById(args.userId).exec(),
      Todo.findById(args.todoId).exec(),
    ]);

    todo.assignedTo = user;

    return todo.save();
  }
}
