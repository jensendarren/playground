const server = require("http").createServer();
const options = { cors: {
    origin: "http://localhost:8000"
}};
// const options = {}
const io = require("socket.io")(server, options);

io.on("connection", (socket) => {
    console.log('Server is connected to client.')
    socket.on('foo', (cmd) => {
        let msg = `Hey I just got ${cmd} from you!`
        console.log(msg)
        io.emit('message', msg);
    });
});

//for testing, we're just going to send data to the client every second
setInterval( function() {
    var msg = Math.random();
    io.emit('message', msg);
    console.log(`Check client for this message: ${msg}`);
  }, 2000);


server.listen(3000, () => console.log('WebSocket server listening on localhost:3000'));