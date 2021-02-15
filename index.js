const { response } = require('express');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('static'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
    console.log(app._router.stack.filter(r => r.route).map(r => r.route.path));
});