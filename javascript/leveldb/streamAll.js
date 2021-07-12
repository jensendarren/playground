const db = require('./db')
const stream = db.createReadStream()

stream.on('data', (kv) => {
  console.log(kv)
})
