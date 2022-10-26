import { mintNFT } from "./mint-nft";
import { createVoteFile, storeNFT } from "./nft-storage"; 
import { doc, addDoc, collection } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTtmDb2OlMbvWuZ7y5FGEvd4a_0Bo2UDg",
    authDomain: "rnvotedapp.firebaseapp.com",
    projectId: "rnvotedapp",
    storageBucket: "rnvotedapp.appspot.com",
    messagingSenderId: "1029809517766",
    appId: "1:1029809517766:web:95f3f687d1c373d7d813c7",
    measurementId: "G-5SXYXTP2SH"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function processVote(contestName, voteChoice) {

    const file = createVoteFile(contestName, voteChoice)
    const metadataURI = storeNFT(file, "Vote")
    const hash = mintNFT(metadataURI)
    updateContestVotes(contestName, hash)

}

async function updateContestVotes(contestName, hash) {
    await addDoc(collection(db, "contests", contestName, "votesHashes"), {
        contestName: contestName,
        hash: hash
      });
}

