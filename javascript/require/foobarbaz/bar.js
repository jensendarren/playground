const foo = require('./foo')

module.exports = class Bar {
    constructor() {
        this.account = `${foo.account}-in-bar`;
    }
}