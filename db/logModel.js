const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
  name: {type: String, required: true}, 
  bookName: String,
  bookStart: Number,
  bookEnd: Number,
  pagesReadSinceLastLog: Number,
  date: { type: Date, default: Date.now }
})

const Log = mongoose.model('Log', logSchema);

module.exports = Log;