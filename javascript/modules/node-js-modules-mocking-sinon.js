/* Example of using Node JS module pattern to separate concerns and use mocking in tests */

// wallet.js

const web3 = require('web3'); // suppose this is a web3 client

const privateKey = '...';
const validAddresses = {
  // ...
};
// ... other sensitive data

module.exports = {
  // the exposed API contains only two methods
  // which is the same as using public class methods in OOP languages
  addValidAddress(address, options) {
    // ... required verification
    validAddresses[address] = options;
  },
  sendTransaction(address, amount, options) {
    if (!(address in validAddresses)) {
      throw new Error('U wot mate?');
    }
    // ... require verification
    web3.sendTransaction(address, amount, privateKey, options);
  }
};

// client_code.js

const {addValidAddress, sendTransaction} = require('./wallet.js');
// neither privateKey nor validAddresses are directly available, i.e. they are private

addValidAddress('0x123ValidAddress');
try {
  sendTransaction('0x321InvalidAddress', 100000, {pls: true});
} catch (e) {
  assert(e.message === 'U wot mate?');
}

sendTransaction('0x123ValidAddress', 1); // ✅

// test-wallet.js

const sinon = require('sinon');
const web3 = require('web3');
const wallet = require('wallet');

describe('Test payments', () => {
  const sandbox = sinon.createSandbox();

  before(() => {
    sandbox.stub(web3, 'sendTransaction').resolves('sent!');
    wallet.addValidAddress('0x1234');
  });

  after(() => {
    sandbox.restore();
  });

  it('sends the payment', async () => {
    await wallet.sendTransaction('0x1234', 10, {gasLimit: 0.1});
    // the actual web3.sendTransaction never gets called, the call is always intercepted
    assert(web3.sendTransaction.calledOnceWith('0x1234', 10));
  });
});
