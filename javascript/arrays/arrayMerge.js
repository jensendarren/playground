pendingBefore = [1,2,3]

snapshot = [1,2,3]
backup = [1,2,3,4,5,6,7,8]
pending = [6,7,8]

// remove element in backup not in snapshot
result = backup.filter( ( el ) => !snapshot.includes( el ) ) // [4,5,6,7,8]
console.log(result)

// remove element in result not in pending
result2 = result.filter((el) => !pending.includes(el)) // [4, 5]
console.log(pending.concat(result2))

// console.log(result2)
// pending.concat(result2)
// console.log(pending)

