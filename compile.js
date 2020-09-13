//compile.js
const path = require(‘path’);
const fs = require(‘fs’);
const solc = require(‘solc’);const auctionPath = path.resolve(__dirname, ‘contracts’, ‘Auction.sol’);
const source = fs.readFileSync(auctionPath, ‘utf8’);module.exports = solc.compile(source, 1).contracts[‘:Auction’];
