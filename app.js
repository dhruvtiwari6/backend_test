require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello World!</h1>');
});

app.get('/home', (req, res) => {
    res.status(200).send('<h1>home page');
  });

  app.get('/about', (req, res) => {
    res.status(200).send('<h1>about page</h1>');
  });

  app.get('*', (req, res) => {
    res.status(401).send('<h1>page not found</h1>');
  });


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
