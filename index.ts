import {simpleRouter} from './src/routes';
import swDocument from './swagger.def';
const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');

const port = 3010;

app.use(express.static('static'));

app.use('/api-docs', swaggerUI.serve, (req, res) => {
  const html = swaggerUI.generateHTML(swDocument);
  res.send(html);
});

app.use('/', simpleRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
