const mongoose = require('./mongoose');

const schema = mongoose.Schema({
  name: { type: String, required: true },
});

const Model = mongoose.model('User', schema);

module.exports = Model;
