"use strict";
const path = require('path');

module.exports = function(app){
    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });
    app.get('/test', (req, res) => {
        res.sendFile(path.join(__dirname , "../public/index.html"));
    });
    app.get('/image', (req, res) => {
        res.sendFile(path.join(__dirname , "../public/books.jpg"));
    });
}