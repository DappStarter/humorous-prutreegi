require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind atom install phone off skate'; 
let testAccounts = [
"0x5d61d6aef18bb358018e6eb331a9f68868915b5bbbff9e7bd242174f3089d1ac",
"0x6c2516019320169a3fe872eb0945a896444d8b5d5943d6a4c4f2fd901641e590",
"0x87b26fe894078e3348f5fe5c5a6c0e42c95ded30a8fd968367e44e975afc43a9",
"0x1a518e3cd5c6ebb7247e566b7830409a51dd3b737af59fcaa591821d1c0f4352",
"0x556608348883a438295932fb58863a61447ee86ee65a5ec4dbda5b60e8427320",
"0xba2e0655ea4cfc9c912396f637644a8a1dfc1e5440fe07996e4244b6aff6a074",
"0x7dd8a51c82f8de5b351f83e8598c3dadd8c81a73dffbeca172c659ed6923cf30",
"0x3fddd673a0d06a3e3cc28132dbcb824b4166584e2c9edc58341517f6e89e888f",
"0x6d3c39b58fe61c877c90c5beb2ef5f71989352d8857963be0f65b7e91c89ef2f",
"0xed27c6edaeea6bc07dde0ff0a8fa1116838243fea1ddf870ef929624f0a33b6e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
