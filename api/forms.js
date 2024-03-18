const connectDB = require('../db');
const Form = require('../models/Form');

module.exports = async (req, res) => {
  connectDB();

  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};