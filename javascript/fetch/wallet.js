const fetch = require('node-fetch')

let from='DADOULAND'

async function ping() {
  res = await fetch('http://localhost:2469/api/ping')
  const data = await res.json()
  console.log(data)
}

async function auth(id, passcode) {
  res = await fetch('http://localhost:2468/api/wallet/address', {
    headers: { 'wallet-token': `${id}-${passcode}` }
  })
  response = await res.json()
  from = response.data.address
  console.log(response.data.address)
}

(async () => {
  ping()
  await auth("bd971af1-d3fa-48c9-a1fe-ee080c10c525", "0x94bfafdf77dd052eef533104771a3b9600e93b6d6fff28aba6a8aaa2289f8383")
  console.log(`FROM: ${from}`)
})()