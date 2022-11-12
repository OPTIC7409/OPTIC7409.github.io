const express = require('express');
const path = require('path');
const app = express();



app.get('/', function(req, res) {
    app.use(express.static(__dirname));
})

app.listen(22230, function() {
    console.log("[Website] Running on port *22230*!")
})