const bs58 = require('bs58');

const base58String = "DONT LOOK";
const bytes = bs58.decode(base58String);

console.log(bytes);
