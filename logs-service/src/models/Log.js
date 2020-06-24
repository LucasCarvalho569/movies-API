const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  system: { type: String, required: true },
  date: { type: Date, default: Date.now },
  logType: { type: String, enum: ['ERROR', 'LOGIN', 'LOGOUT'], required: true },
  message: { type: String, required: true }
});

module.exports = mongoose.model('Log', LogSchema);
