
const API_URL = "https://eth-goerli.alchemyapi.io/v2/u1dcBIFQ7FZBpGMWBuAdlR_eeupDRiPO"
const PRIVATE_KEY="49ac650ad01d06dfe0b38f466db3482ac4bca44b14c7d7f42f205cdf1615391a"
const PUBLIC_KEY="0xF8604Fb9956B9682e2d037890A48DfdF39DeCebc"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../SafeMint.json")
const contractAddress = "0x28bae1a33941d7f0691e4a1b0a47c618b39a89b0"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

export async function mintNFT(contestName, tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce

  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
  }

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            )
            return hash
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            )
          }
        }
      )
    })
    .catch((err) => {
      console.log("Promise failed:", err)
    })
}

