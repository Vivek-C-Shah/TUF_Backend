const express = require('express');
const connectDB = require('./db');
const Form = require('./models/Form');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Connect Database
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/v1/forms', async (req, res) => {
    try {
      const forms = await Form.find();
      res.json(forms);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
});

app.post('/api/v1/submit', async (req, res) => {
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
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));