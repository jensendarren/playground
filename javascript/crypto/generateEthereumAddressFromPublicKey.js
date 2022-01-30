const keccak256 = require('keccak256');

// Expected generated address: 0x58e930538670d871c4c5b48cdcd0016b8dcbc0ae
const publicKey = '9da2cf7cde3867597140c1ea1547606a9ab62fd156618cb1ffaadd6b41eba01ffc7744664667f7bd84457360026b89273fb0f289de094161b3b2c31a540ec68d';

const publicKeyBuffer = Buffer.from(publicKey, 'hex')

// To generate an Ethereum address from the public key, we apply Keccak-256 hash to the key and then take the last 20 bytes of the result (and ‘0x’ at the start of the address)
const ethereumAddress = keccak256(publicKeyBuffer).toString('hex').slice(64 - 40);

console.log('Ethereum Address: ', '0x' + ethereumAddress);

console.log('Generated expected address? ', '58e930538670d871c4c5b48cdcd0016b8dcbc0ae' === ethereumAddress )