const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Connect Database
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API Running'));

// Import routes
const formsRoutes = require('./api/forms');
const submitRoutes = require('./api/submit');

// Use routes
app.use('/api/v1/forms', formsRoutes);
app.use('/api/v1/submit', submitRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));