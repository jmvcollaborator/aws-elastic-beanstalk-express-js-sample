const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hola gioias esta mierda esta publicada en amazon y por ahora no sirve para nada'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
