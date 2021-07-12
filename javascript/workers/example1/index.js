const { Worker } = require('worker_threads')

let objA = {
  name: 'DADOU',
  age: 3
}

let objB = {
  name: 'SOPHIA',
  age: 32
}

let objects = [objA, objB]

function runService(workerData) {
  return new Promise((resolve, reject) => {

    const worker = new Worker('./service.js', { workerData: objects });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}

async function run() {
  const result = await runService('world')
  console.log(result);
}

run().catch(err => console.error(err))