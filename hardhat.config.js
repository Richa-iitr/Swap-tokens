require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-ethers");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_URL}`,
      },
      chainId: 1
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.8.11",
        settings: {},
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
