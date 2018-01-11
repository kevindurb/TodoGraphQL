const mongoose = require('./mongoose');

const schema = mongoose.Schema({
  name: String,
  done: Boolean,
  completedAt: Date,
});

const Model = mongoose.model('Todo', schema);

module.exports = Model;
