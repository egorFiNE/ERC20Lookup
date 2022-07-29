async function main() {
  const deployer = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.provider);

  console.log("Deploying ERC20Lookup with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Factory = await ethers.getContractFactory('ERC20Lookup', deployer);
  const contract = await Factory.deploy();
  await contract.deployed();

  console.log("Deployed at:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
