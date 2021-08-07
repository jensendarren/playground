const foo = require('./foo')

module.exports = class User {
    // foo is a singleton
    // bar is a instance
    // constructor({ foo, bar, baz }) {
    constructor({ bar }) {
        console.log('User constuctor called with: ', foo, bar)
        this.foo = foo;
        this.bar = bar;
    }

    get name() {
        return this._name;
    }

    set name(_name) {
        this._name = _name;
    }

    updateFooAccount() {
        console.log('updateFooAccount called with: ', this.foo.account)
        this.foo.account = `foo-updated-by-${this.name}`
    }

    updateBarAccount() {
        console.log('updateBarAccount called with: ', this.bar.account)
        this.bar.account = `bar-updated-by-${this.name}`
    }

    updateBazAccount() {
        console.log('updateBazAccount called with: ', baz.account)
        baz.account = `${baz.account}-baz-updated-by-user`
    }
}