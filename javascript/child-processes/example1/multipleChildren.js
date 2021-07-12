const { fork } = require('child_process')

let params = {
  name: 'Dadou!!'
}

objstr = JSON.stringify(params)

console.log(params)
console.log(objstr)

const child1 = fork(__dirname + '/getCount', ['Child1', objstr]);
const child2 = fork(__dirname + '/getCount', ['Child2', objstr]);

child1.on('message', (message) => {
  console.log('Returning /total results from child 1');
  console.log(message)
});

child2.on('message', (message) => {
  console.log('Returning /total results from child 2');
  console.log(message)
});

child1.send('START');
child2.send('START');