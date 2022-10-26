/**
	* @type import('hardhat/config').HardhatUserConfig
	*/
	require('dotenv').config();
	require("@nomiclabs/hardhat-ethers");
	const API_URL="https://eth-ropsten.alchemyapi.io/v2/u1dcBIFQ7FZBpGMWBuAdlR_eeupDRiPO";
	const PRIVATE_KEY="65430adc051478621bf5dbb601beff09edbd88e0f05bb5afe339d9387d91aa6c";
	module.exports = {
	   solidity: "0.8.0",
	   defaultNetwork: "ropsten",
	   networks: {
	      hardhat: {},
	      ropsten: {
	         url: API_URL,
	         accounts: [`0x${PRIVATE_KEY}`]
	      }
	   },
	}