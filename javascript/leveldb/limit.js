const db = require('./db')
const stream = db.createReadStream({limit: 3})

stream.on('data', (kv) => {
  console.log(kv)
})
