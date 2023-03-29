import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

import dotenv from "dotenv";

dotenv.config();

module.exports = {
  zksolc: {
    version: "1.3.1",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkSyncTestnet",

  networks: {
    zkSync: {
      url: "https://mainnet.era.zksync.io",
      ethNetwork: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_PRIVATE_KEY}`,
      zksync: true,
      verifyURL:
        "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
    },
    zkSyncTestnet: {
      url: "https://testnet.era.zksync.dev",
      ethNetwork: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_PRIVATE_KEY}`,
      zksync: true,
      verifyURL:
        "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
    },
  },
  solidity: {
    version: "0.8.17",
  },
};
