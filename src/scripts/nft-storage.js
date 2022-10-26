// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'

// The 'fs' builtin module on Node.js provides access to the file system
import fs from 'fs'

// The 'path' module provides helpers for manipulating filesystem paths
import path from 'path'

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDcyQzRiMEM5OTA4QjREYzU5ODQ0MjYwNjM1ZTY1ZjY1YTJBODM3ZUQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NTkwMDQyODk3MCwibmFtZSI6InZvdGVkYXBwIn0.W_LeXYSQ3ftzrfLSmJFgQZGReT8VyZxeh-caIM8nO7M'


/**
  * Reads an image file from `imagePath` and stores an NFT with the given name and description.
  * @param {string} imagePath the path to an image file
  * @param {string} name a name for the NFT
  * @param {string} description a text description for the NFT
  */

async function storeNFT(file) {

    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    // call client.store, passing in the image & metadata
    return nftstorage.store({
        file,
    }).url
}

/**
  * A helper to read a file from a location on disk and return a File object.
  * Note that this reads the entire file into memory and should not be used for
  * very large files. 
  * @param {string} filePath the path to a file to store
  * @returns {File} a File object containing the file content
  */
async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), { type })
}

function createVoteFile(contestName, voteChoice) {
    const jsonData = {
        contestName: contestName,
        voteChoice: voteChoice
    }
    const voteString = JSON.stringify(jsonData);
    const blob = new Blob([voteString], { type: 'application/json' });
    const file = new File([ blob ], 'VoteInfo.json');
    return file
}



