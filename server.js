const express = require('express');
const path = require('path');
const app = express(); 
const config = require('./config/config');

//serve static files
app.use(express.static(path.join(__dirname + "public")));

//Allow cross origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

require('./routes/route')(app);

var server = app.listen(config.server.port, config.server.host, () => {
    console.log("We're live at %s on %s ", server.address().address, server.address().port);
})