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