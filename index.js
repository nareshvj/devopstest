const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('how are you doing');
	});

app.listen(8082, () => {
    console.log('Listening on the port 8080');
 });
