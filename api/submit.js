const connectDB = require('../db');
const Form = require('../models/Form');

module.exports = async (req, res) => {
  connectDB();

  const { username, preferredLanguage, stdin, sourceCode } = req.body;

  try {
    let form = new Form({
      username,
      preferredLanguage,
      stdin,
      sourceCode,
    });

    await form.save();

    res.send('Form data saved');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};