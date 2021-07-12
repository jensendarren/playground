let path = require('path')

let progress = {
  type: 'request_deployment-progress',
  data: []
}

function update(_filename, _progress = 0, _status = 'UNKNOWN') {
  let inputs = formatInputs(_filename, _progress, _status)
  let existingRow = fetchExisitngRow(inputs.filename)
  if(existingRow) {
    existingRow.progress = inputs.progress
    existingRow.status = inputs.status
  } else {
    progress.data.push(inputs)
  }
}

function formatInputs(_filename, _progress, _status) {
  let filename = path.basename(_filename)
  let status = _status.toUpperCase()
  let progress = _progress
  return {filename, progress, status}
}

function fetchExisitngRow(filename) {
  return progress.data.find(row => row.filename === filename)
}

update('/var/www/hello.html')
update('routes.json')
update('hello.html', 10, 'NEWTHINGSHAPPEND')

console.log(progress)