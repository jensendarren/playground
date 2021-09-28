
function waiting() {
	return new Promise((resolve, reject) => {
 		setTimeout(()=>{}, 1000)
 		console.log('in waiting')
 		// resolve
 	})
}

async function callMe() {
	console.log('called CallMe!!!')
	p = await waiting()
	// console.log(p)
	console.log('done!!')
}

callMe()
callMe()
callMe()