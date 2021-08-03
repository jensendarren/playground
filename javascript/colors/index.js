const util = require('./lib/util');
const color = require('./lib/color');
const singleton = require('./lib/singleton')
const config = require('./config')

console.log('Index module loaded? ', module.loaded);

setImmediate(() => {
  console.log('The index.js module object is now loaded!', module.loaded)
});

console.log(color.getRandomColor())

console.log(singleton.name1)
console.log(singleton.name2)

console.log(`Server ${config.host} will run on ${config.port}`)

singleton.name1 = 'Updated to Bar'

require('./src/loadSingleton')

// Because of caching you will only see 'Hello There' output once:
require('./src/sayhi') // will output
require('./src/sayhi') // NO output (Cached)
require('./src/sayhi') // NO output (Cached)

// However, if you wrap the console output in a function and set module.exports to that function you can then call it directly from the require statement like this:
require('./src/sayhifn')()
require('./src/sayhifn')()
require('./src/sayhifn')()