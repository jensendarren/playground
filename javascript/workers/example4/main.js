const { Worker } = require('worker_threads')
const os  = require('os')
const threads = []
const MAX_THREADS = os.cpus().length
let threadIndex = 0

function createThreads() {
  for(let i=0; i<MAX_THREADS;i++){
    let worker = new Worker('./worker.js')
    worker.on('message', onTxLoaded)
    worker.on('error', (error) => console.error(`Error processing tx in thread ${i}: ${error}`))
    worker.on('exit', (code) => {
      console.log(`Thread ${i} exiting...${code}`);
      if (code !== 0) { console.error(`Worker stopped with exit code ${code}`) }
    })
    threads.push(worker)
  }
}

function loadTxByWorker(txHash, index) {
  threadIndex == MAX_THREADS - 1 ? threadIndex = 0 : threadIndex += 1
  // console.log(`threadIndex: ${threadIndex}`)
  threads[threadIndex].postMessage({txHash, index})
}

function onTxLoaded(tx) {
  console.log(`Parent received message from worker - tx: ${tx.hash} to: ${tx.to}`)
}

function run() {
  createThreads()
  console.log(`${threads.length} threads created`)
  for(let i=0; i<100; i++) {
    loadTxByWorker(`0x${i}000xxx`, i)
  }
}

run()