import express from 'express';
import { resolve } from 'path';

const { PORT = 8080 } = process.env;

const app = express();
app.use(express.static(resolve('dist/client')));

const server = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${server.address().port}`);
});
