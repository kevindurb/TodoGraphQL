const mongoose = require('./mongoose');
const User = require('./User');

const schema = mongoose.Schema({
  name: { type: String, required: true },
  done: { type: Boolean, default: false },
  completedAt: Date,
  assignedTo: User.schema,
});

const Model = mongoose.model('Todo', schema);

module.exports = Model;
