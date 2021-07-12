const { Machine, interpret } = require('xstate')

const lightsMachine = Machine({
  id: 'roomlights',
  initial: 'nolights',
  states: {
    nolights: {
      on: {
        p1: {
          target: 'l1',
          actions: 'turnOnL1'
        },
        p2: {
          target: 'l1',
          actions: 'turnOnL1'
        }
      }
    },
    l1: {
      on: {
        p1: {
          target: 'l2',
          actions: 'turnOnL2'
        },
        p2: {
          target: 'l3',
          actions: 'turnOnL3'
        }
      }
    },
    l2: {
      on: {
        p1: {
          target: 'nolights',
          actions: ['turnOffAll']
        },
        p2: {
          target: 'nolights',
          actions: ['turnOffAll']
        }
      }
    },
    l3: {
      on: {
        p1: {
          target: 'nolights',
          actions: 'turnOffAll'
        },
        p2: {
          target: 'nolights',
          actions: 'turnOffAll'
        }
      }
    },
  }
}, {
  actions: {
    turnOnL1: (context, event) => {
      console.log('turnOnL1')
    },
    turnOnL2: (context, event) => {
      console.log('turnOnL2')
    },
    turnOnL3: (context, event) => {
      console.log('turnOnL3')
    },
    turnOffAll: (context, event) => {
      console.log('turnOffAll')
    }
  }
})

const lightsService = interpret(lightsMachine).onTransition(state => {
  console.log(state.value)
})

// Start the service
lightsService.start()

// Turn on L1 using p1 (or p2!!)
lightsService.send('p1')

// Press p1 again to turn on l2
lightsService.send('p1')

// Press p1 again to turn off all lights!
lightsService.send('p1')

console.log(`Current State: ${lightsService.state.value}`)