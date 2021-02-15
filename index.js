const { response } = require('express');
const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});