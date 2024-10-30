require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const webhookRoutes = require('./routes/webhook');
const pullRequestRoutes = require('./routes/pullRequests');

const app = express();

connectDB();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  next();
});

app.use('/api', webhookRoutes);
app.use('/api', pullRequestRoutes);

app.use((req, res) => {
  console.log('404 - Not Found:', req.method, req.path);
  res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
