var express = require('express');
var app = express();
var routes = require('./routes');

const port = 3000;

app.use('/api', routes);

app.listen(port, () => console.log(`App listening on port ${port}!`));