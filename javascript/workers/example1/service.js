const { workerData, parentPort } = require('worker_threads')

console.log(`In worker service ${workerData[0].name}`)
console.log(`In worker service ${workerData[1].name}`)

workerData[1].name = 'Fred'

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"
parentPort.postMessage({ hello: workerData })