async function main() {
  const votedAppContract = await ethers.getContractFactory("VotedApp")

  // Start deployment, returning a promise that resolves to a contract object
  const votedApp = await votedAppContract.deploy()
  await votedApp.deployed()
  console.log("Contract deployed to address:", votedApp.address)
}


const app = initializeApp(firebaseConfig);


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })