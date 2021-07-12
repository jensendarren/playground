const db = require('./db')
const filter = {
  gt: 'co',
  lt: 'z'
}
const stream = db.createReadStream(filter)

stream.on('data', (kv) => {
  console.log(kv)
})