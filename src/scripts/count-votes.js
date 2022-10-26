import { retrieveNFT } from "./retrieve-nft"

export function countVotes(contestName) {
    const contest = await getDocs(db, "contests", contestName)
    const { choices } = contest.data()
    const { voteHashes } = contest.data()
    var voteCounts = {}
    
    for (choice in choices) {
        voteCounts[choice] = 0
    }

    voteHashes.forEach(element => {
        const vote = retrieveNFT(element);
        for(let i = 0; i < choices.length; i += 1) {
            if (vote === choices[i]) {
                voteCounts[choices[i]] += 1
            }
        }
    });

    return voteCounts
}