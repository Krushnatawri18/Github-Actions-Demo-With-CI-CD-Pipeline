const express = require('express');
const app = express();

app.get('/testNode', (req, res) => {
    res.status(200).send("testNode endpoint connected!")
});

module.exports = app;