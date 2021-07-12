const { parentPort  } = require('worker_threads');

function testing(txHash, index) {
  let timeout = 1000
  timeout = timeout + (100 * index)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      tx = {hash: txHash, to: 'dadou123'}
      resolve(tx)
    }, timeout)
  })
}

parentPort.on('message', async (event) => {
  // TODO: Try / Catch
  txHash = event.txHash
  index = event.index
  console.log(`worker recieved message from parent tx ${txHash}`)
  tx = await testing(txHash, index)
  parentPort.postMessage(tx)
});