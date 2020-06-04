var AppController = require('../src/app-controller');

var express = require('express');
var router = express.Router();

app.get('/', async (req, res) => {
    const html = await new AppController(req, res).index()
    res.send(html)
})

module.exports = router;
