// Websockets Browser based
const url = 'ws://localhost:2469/ws/deploy/progress'
const connection = new WebSocket(url)
connection.onopen = () => { connection.send('ping') }
connection.onmessage = e => { console.log(e.data) }