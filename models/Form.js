const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  username: String,
  preferredLanguage: String,
  stdin: String,
  sourceCode: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Form', FormSchema);