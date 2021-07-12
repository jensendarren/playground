### WebSockets example using Socket.io

#### Debugging

If you want to see debugging output then run the server as follows:

```
DEBUG=* node init.js
```

To directly test the server using curl then run the following:

```
curl "http://localhost:3000/socket.io/?EIO=4&transport=polling"
```

For the cient add the following to the code:

```
localStorage.debug = '*';
```
