const watcher = require('./watcher')

let settings = {
  params: {
    firstName: 'darren',
    lastName: 'nesnej'
  }
}

watcher.start(settings)
console.log(watcher.getParams())
watcher.setParams({
  firstName: 'sophia',
  lastName: 'nesnej'
})
console.log(watcher.getParams())