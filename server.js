// express web server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

const port = 8800;

app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || 8800));
