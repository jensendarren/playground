event = {
  "pathParameters": {
//    "active": false
  }
}

//event = {"pathParameters": {}}

event.pathParameters['active'] !== undefined ? activeFilter = event.pathParameters.active : activeFilter = true

console.log(activeFilter)
