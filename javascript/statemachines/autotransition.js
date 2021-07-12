const { Machine, interpret } = require('xstate')

machine = Machine(
  {
    id: 'storageLink',
    initial: 'initialized',
    states: {
      initialized: {
        on: {
          CREATE: ['created', 'agreed'],
        }
      },
      created: {
        // on: {
        //   '': 'agreed'
        // }
      },
      agreed: {},
      failed: {
        type: 'final'
      }
    }
  }
)

const storageLinkService = interpret(machine).onTransition(state => {
  state
  console.log(`Current state after transition: ${state.value}`)
})

// Start the service
storageLinkService.start() // initialized state

storageLinkService.send('CREATE')

console.log(`Final State: ${storageLinkService.state.value}`)