const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

/* Enrutadores */

const mainRouter = require('./routers/main');

/* Rutas */

app.use('/', mainRouter);


app.listen(port, () => console.log(`App listening on port http://localhost:${port} !`));

