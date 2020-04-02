const express = require('express');

const app = express();

const { PORT = 80 } = process.env;

app.use(express.static('./dist/'));

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});
