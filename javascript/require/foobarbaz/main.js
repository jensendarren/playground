const Bar = require('./bar');
// const Baz = require('./user');
const User = require('./user');

// const bar = {account: 'bar-account'}
// const baz = {account: 'baz-account'}
const bar1 = new Bar()
const deps1 = {bar: bar1}
const user1 = new User(deps1)
user1.name = 'User1'

const bar2 = new Bar()
const deps2 = {bar: bar2}
const user2 = new User(deps2)
user2.name = 'User2'

user1.updateFooAccount()
user2.updateFooAccount()

console.log(`bar1.account before: `, bar1.account)
console.log(`bar2.account before: `, bar2.account)

user1.updateBarAccount()
user2.updateBarAccount()

// console.log(`foo.account after: `, foo.account)
console.log(`foo.account after require: `, require('./foo').account)
console.log(`bar1.account after: `, bar1.account)
console.log(`bar2.account after: `, bar2.account)
