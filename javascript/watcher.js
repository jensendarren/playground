// declare module variables
let params, settings

module.exports = {
  start: start,
  _prepareParams: prepareParams,
  getParams: getParams,
  setParams: setParams
}

async function start(_settings) {
  settings = _settings
  prepareParams(_settings)
}

function prepareParams() {
  params = settings.params
}

function getParams() {
  return params;
}

function setParams(_params) {
  params = _params;
}