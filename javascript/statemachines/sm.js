class StorageLink {
  constructor() {
    this._id = 'newid (from class)'
  }
  get id() {
    return this._id
  }
}

const { Machine, interpret, assign } = require('xstate')

const createStorageLinkMachine = (model) => {
  return Machine(
    {
      id: 'storageLink',
      initial: 'initialized',
      context: { model },
      states: {
        initialized: {
          on: {
            CREATE: 'created',
          }
        },
        created: {
          on: {
            AGREE: 'agreed'
          }
        },
        agreed: {
          on: {
            ENCRYPT: 'encrypting'
          }
        },
        encrypting: {
          on: {
            STREAM: 'streaming'
          }
        },
        streaming: {},
        failed: {
          type: 'final'
        }
      }
    }
  )
}

let model = new StorageLink()
console.log(`New SL created with id: ${model.id}`)

storageLinkMachine = createStorageLinkMachine(model)

const storageLinkService = interpret(storageLinkMachine).onTransition(state => {
  state
  console.log(`Current state after transition: ${state.value}`)
})

// Start the service
storageLinkService.start() // initialized state

// can also jump to a specific state when starting, like this
// storageLinkService.start('agreed')

// console.log(`STATES: ${Object.keys(storageLinkMachine.states)}`)

console.log(`Initial State: ${storageLinkService.state.value}`)
console.log(`Initial Context: ${storageLinkService.state.context.model.id}`)
console.log(`State has changed? ${storageLinkService.state.changed}`)

// storageLinkService.state = 'agreed'

// storageLinkService.send({type: 'CREATE', model})
storageLinkService.send('CREATE')
storageLinkService.send('AGREE')
// storageLinkService.send('ENCRYPT')



// // Test state.changed
// storageLinkService.send('ENCRYPT')
// console.log(`State has changed? ${storageLinkService.state.changed}`)

// storageLinkService.send('STREAM')
// console.log(`State has changed? ${storageLinkService.state.changed}`)

console.log(`Final State: ${storageLinkService.state.value}`)
console.log(`State has changed? ${storageLinkService.state.changed}`)
console.log(`Final Context: ${storageLinkService.state.context.model.id}`)