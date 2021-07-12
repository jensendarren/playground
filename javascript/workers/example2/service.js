const { parentPort, workerData } = require('worker_threads');

function parse(data) {
  return `This is the data: ${data}`
}

const script = workerData;
let output = parse(script)
parentPort.postMessage(output);