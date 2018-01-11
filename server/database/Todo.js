const mongoose = require('./mongoose');
const User = require('./User');

const schema = mongoose.Schema({
  name: String,
  done: Boolean,
  completedAt: Date,
  assignedTo: User.schema,
});

const Model = mongoose.model('Todo', schema);

module.exports = Model;
