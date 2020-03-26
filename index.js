const server = require('./api/server');
const PORT = 14500;

server.listen(PORT, () => {
  console.log(
    `\n ${Date(
      Date.now().toString,
    )} \n Server started on 'http://localHost:${PORT}'`,
  );
});
