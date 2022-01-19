function m1(p1, p2) {
	console.log('m1 args: ', arguments)
	console.log(Array.from(arguments))
}

function m2(...args) {
	console.log('m2 args: ', args)
	console.log(arguments)
	console.log(Array.from(arguments))
}

function cambodia() {
	console.log(arguments)
	console.log(Array.from(arguments))
}

cambodia()

// m1('Dadou', 'Ly')
// m2('Dadou', 'Ly')