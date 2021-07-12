const { fork } = require('child_process');
let child
let resurrection = -1

function createChild() {
  child = fork(__dirname + '/child');

  child.on('close', (code) => {
    console.log(`child process exited ${resurrection}`)
    if(resurrection < 10) {
      run()
    }
  })
}

function sendMessageToChild() {
  child.send('START');
}

function suicide() {
  setTimeout(() => {
    child.kill()
  }, 500)
}

function run() {
  resurrection +=1
  createChild()
  sendMessageToChild()
  suicide()
}

run()