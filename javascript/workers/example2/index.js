const { Worker } = require('worker_threads');

function parseJSAsync(script) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./service.js', {
      workerData: script
    });
    worker.on('message', (result) => {console.log(`logged in parseJSAsync ${result}`)});
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};

async function run(i) {
  let result = parseJSAsync(`running ${i}`)
  console.log(`logged in run ${result}`)
}

let i=0

while(i<100) {
  i++
  run(i)
}