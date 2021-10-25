import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/slider', (req, res) => {
  res.send(data.slider);
});

app.get('/api/homepage', (req, res) => {
    res.send(data.homepage);
  });

app.get('/api/homemade', (req, res) => {
  res.send(data.homemade);
});

app.get('/api/organic', (req, res) => {
  res.send(data.organic);
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});