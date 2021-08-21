let pendingTransactions = [{hash: 1, name: 'Dadou'}, {hash: 2, name: 'John'}, {hash: 3, name: 'Brian'}]
let watchers = [{name: 'Dadou'}, {name: 'Peter'}]

function matchTransaction(tx, txHash) {
	if (tx.hash === txHash) {
		console.log('hashes match', tx.name)
		// if ((watchers.filter(watcher => {
		// 	console.log('watcher name', watcher.name)
		// 	console.log('tx name', tx.name === watcher.name)
		// 	tx.name === watcher.name
		// })).length > 0) {
		// 	console.log('found!!')
		// 	return true
		// }
		found = watchers.filter(watcher => {
			// console.log('watcher name', watcher.name)
			// console.log('tx name', tx.name === watcher.name)
			return tx.name === watcher.name
		})
		console.log(found)
	}
}

const result = pendingTransactions.filter((tx) => {
	// console.log(tx)
	txHash = 1
  	return matchTransaction(tx, txHash)
});

console.log(result)

// example of adjusting all values in an object without knowing the keys upfront:

let gasPrice = 111111
let maxFeePerGas = 88888
let maxPriorityFeePerGas = 77777

let gasLegacy = { gasPrice }
let gasEIP1559 = { maxFeePerGas, maxPriorityFeePerGas }

function adjustGasPrice(gas) {
	updatedGas = {}
	Object.entries(gas).map(([key, val]) => updatedGas[key] = val * 2)
	return updatedGas
}

let newGasLegacy = adjustGasPrice(gasLegacy)
let newGasEIP1559 = adjustGasPrice(gasEIP1559)

console.log('newGasLegacy', newGasLegacy)
console.log('newGasEIP1559', newGasEIP1559)

let gpo = { "gasPrice": "0x4a817c800", "dadouPrice": "0x1ad27480" }
// let gpo = "0x4a817c800"

gasStr = ''

if(typeof gpo == 'object') {
	gasStr =  Object.entries(gpo).reduce((out, [k,v]) => { out += `${k} = ${parseInt(v) / 1e9} GWei (${parseInt(v)} Wei) `; return out; }, '')
} else {
	gasStr = `gasPrice == ${parseInt(gpo) / 1e9} GWei (${parseInt(gpo)} Wei) `
}

console.log(gasStr)
