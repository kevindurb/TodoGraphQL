const mongoose = require('./mongoose');

const schema = mongoose.Schema({
  name: String,
});

const Model = mongoose.model('Todo', schema);

module.exports = Model;
