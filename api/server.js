const express = require('express');

const repairRoute = require('./routes/repairRoute');
const enhanceRoute = require('./routes/enhanceRoute');

const server = express();

server.use(express.json());

server.use('/repair', repairRoute);
server.use('/enhance', enhanceRoute);

server.get('/', (req, res) => {
  res.status(200).send('Welcome to Item Server');
});


module.exports = server