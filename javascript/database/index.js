const Server = require('./server');

const server = new Server();
server.run(process.env.PORT);
