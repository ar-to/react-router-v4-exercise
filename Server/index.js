'use strict';

const app = require('./server');

const Port = process.env.PORT || 8081;

app.listen(Port, () => {
  console.log(`Listening on port: ${Port}`)
})