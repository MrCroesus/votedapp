import {Network, Alchemy} from "alchemy-sdk"

const settings = {
  apiKey: "cQylmv-iX1MbKfD3ZNzHdkN1jrYhWfb1",
  network: Network.ETH_GOERLI
}

const contractAddress = "0x28bae1a33941d7f0691e4a1b0a47c618b39a89b0"

const alchemy = new Alchemy(settings);

export async function retrieveNFT(tokenID) {
    const metadata = await alchemy.nft.getNftMetadata(contractAddress, tokenID)
    console.log(metadata)
    return metadata.voteChoice
}
