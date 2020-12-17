///////////////////////////////
// Create an address from a new seed
/////
///////////////////////////////

const {  Bech32Helper, Bip32Path, Converter, Ed25519Address, Ed25519Seed, ED25519_ADDRESS_TYPE } = require("@iota/iota.js");

async function run() {

   // Create a new seed for the wallet
   const walletSeed = new Ed25519Seed(Converter.hexToBytes("1000000000000000000000000000000000000000000000000000000000000001"));

   // Use the new seed like a wallet with Bip32 Paths
   
   const walletPath = new Bip32Path("m/44'/4218'/0'/0'/0'");
   const walletAddressSeed = walletSeed.generateSeedFromPath(walletPath);
   const walletEd25519Address = new Ed25519Address();
   const newAddress = walletEd25519Address.publicKeyToAddress(walletAddressSeed.keyPair().publicKey);

   console.log("Wallet");
   console.log("\tSeed:", Converter.bytesToHex(walletSeed.toBytes()));
   console.log(`\tAddress:`, Bech32Helper.toBech32(ED25519_ADDRESS_TYPE, newAddress));
   console.log();
}

run()
  .then(() => console.log("Done"))
  .catch((err) => console.error(err));
  
