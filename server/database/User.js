const mongoose = require('./mongoose');

const schema = mongoose.Schema({
  name: String,
});

const Model = mongoose.model('User', schema);

module.exports = Model;
