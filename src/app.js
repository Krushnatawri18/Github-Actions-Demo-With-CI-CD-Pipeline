const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from Github Action With CI/CD Pipeline Demo App!");
});

app.get('/testNode', (req, res) => {
    res.status(200).send("testNode endpoint connected and getting response!")
});

module.exports = app;