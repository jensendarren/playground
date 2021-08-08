const Server = require('./src/server');

const server = new Server();
server.run(process.env.PORT);
