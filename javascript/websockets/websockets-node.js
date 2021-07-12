const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:2469/ws/deploy/progress');

ws.on('open', () => {
  ws.send('status');
  ws.send('ping');
});

ws.on('message', (data) => {
  console.log(data);
});
