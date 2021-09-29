require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift reflect pitch hour hunt knee swift genuine'; 
let testAccounts = [
"0xc5418070ab0ff68aac9ee4ddcde037d9493cd32ce69a1b3d0b5e4c4a25bad9a3",
"0x62f2a4f4f209df0efdc9228d00da53d6774b42d50acd7802f92104f267d8dab8",
"0x6ffa37e6b1bdc6dba074da6329799a697fcebdc44a0156490a785bb292a02f88",
"0x24b16b2c8887e67a58fed2d72823f9af7062ca40c5e48a8ec4f3b62bf46404db",
"0x6ea993f87c4c71bab0ecb1241b11be6cfb31259ddbd394112d8e2209b2eeef85",
"0x65d459a99e4ecd766e969801afe7c1810eb76cf66401a415b2ac2fae1dc01a62",
"0x27079c5ad3c8c13eb739dcfe5aa8c157227db81aa1d423bd5741a72b20fd7622",
"0xaf5817c6b3be390da66d744a49cb51c35ec4d61d9044caa49658fac4d6b8fc2c",
"0x7420545752046ea68dbe205ca73438d8563621a32bd9396ee57d988276cae4c7",
"0x8383243690838654403981d56d7481c21661a872d492f4334fb787032406c194"
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
            version: '^0.8.0'
        }
    }
};

