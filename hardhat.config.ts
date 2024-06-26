// import { HardhatUserConfig } from "hardhat/config";
// import "@nomiclabs/hardhat-waffle";
// import "dotenv/config";

// const config: HardhatUserConfig = {
//   solidity: "0.8.9",
//   networks: {
//     'lisk-sepolia': {
//       url: 'https://rpc.sepolia-api.lisk.com',
//       accounts: [process.env.PRIVATE_KEY as string],
//     },
//   },
// };

// export default config;

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    // for testnet
    'lisk-sepolia': {
      url: 'https://rpc.sepolia-api.lisk.com',
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 1000000000,
    },
  },
};



export default config;

