childId = process.argv[2]
params = process.argv[3]

console.log(params)
console.log(JSON.parse(params))

const slowFunction = () => {
  let counter = 0;
  while (counter < 5000000000) {
    counter++;
  }

  return counter;
}

process.on('message', (message) => {
  if (message == 'START') {
    console.log(childId + ' process received START message');
    console.log('params: ', params.name)
    let slowResult = slowFunction();
    let message = `{"totalCount":${slowResult}}`;
    process.send(message);
  }
});