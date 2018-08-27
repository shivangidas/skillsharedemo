"use strict";
const path = require('path');

module.exports = function(app){
    //text
    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });
    //image
    app.get('/image', (req, res) => {
        res.sendFile(path.join(__dirname , "../public/books.jpg"));
    });
    //html page
    app.get('/test', (req, res) => {
        res.sendFile(path.join(__dirname , "../public/index.html"));
    });

}