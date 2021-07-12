const fs = require('fs');
const pino = require('pino');
const multistream = require('pino-multi-stream').multistream;
const level = 'info'
const options = {
  enabled: true,
  level
};

let streams = []

streams.push(
  {stream: fs.createWriteStream('./herebe.log')}
);

streams.push(
  {stream: process.stdout}
)

const l = pino(options, multistream(streams));

l.info("Some log message (to multiple streams)")

l[Object.getOwnPropertySymbols(l)[1]].streams.push({stream: fs.createWriteStream('./magic.log')})

l.info("Some log message (to even more multiple streams)")

l.info("Stop!!")