require("@nomicfoundation/hardhat-toolbox");
require("./task/balance.js");

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    dev: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  }
};
