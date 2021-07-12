childId = process.argv[1]

console.log(`Child ${childId} started...`)

process.on('message', (message) => {
  if (message == 'START') {
    console.log('Child process received START message');
    message = 'hello from child!'
    process.send(message);
  }
});