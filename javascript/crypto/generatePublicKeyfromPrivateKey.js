const { publicKeyCreate } = require('secp256k1');

const privateKey = 'be28f03e8ba426831655a4628319a8d47a091a3ee67c18e5efa45ec54fec1be7';

const privateKeyBuffer = Buffer.from(privateKey, 'hex');

const publicKey = Buffer.from(publicKeyCreate(privateKeyBuffer, false)).toString('hex');

console.log('Public Key: ', publicKey);