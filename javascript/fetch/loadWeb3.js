const web3 = new Web3('ws://localhost:7545')

async function subscribe() {
  const emailContractAddress = '0xB53CCAe21737ca0C5bf3131455A215C62518Abe0'

  const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"SendEmail","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"message","type":"string"}],"name":"send","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

  email = new web3.eth.Contract(abi,emailContractAddress)

  console.log(Object.keys(email))

  emails = await email.getPastEvents("SendEmail",{fromBlock: 0, toBlock: 'latest'})
  console.log(`Email count: ${emails.length}`)

  subscribeLogEvent(email, 'SendEmail')
}

// a list for saving subscribed event instances
const subscribedEvents = {}

// Subscriber method
const subscribeLogEvent = (contract, eventName) => {
  const eventJsonInterface = web3.utils._.find(
    contract._jsonInterface,
    o => o.name === eventName && o.type === 'event',
  )
  const subscription = web3.eth.subscribe('logs', {
    address: contract.options.address,
    topics: [eventJsonInterface.signature]
  }, (error, result) => {
    if (!error) {
      const eventObj = web3.eth.abi.decodeLog(
        eventJsonInterface.inputs,
        result.data,
        result.topics.slice(1)
      )
      console.log(`New ${eventName}!`, eventObj)
    }
  })
  subscribedEvents[eventName] = subscription
}

(async () => {
	await subscribe()
})()