const Todo = require('../database/Todo');
const User = require('../database/User');

module.exports = {
  getAll(root, args) {
    return User.find({}).exec();
  },
  addUser(root, args) {
    const user = new User({
      name: args.name,
    });
    return user.save();
  },
}
