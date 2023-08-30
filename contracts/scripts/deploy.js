async function main() {
  const deployer = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.provider);
  console.log(deployer);

  console.log("Deploying ERC20Lookup with the account:", deployer.address);

  const Factory = await ethers.getContractFactory('ERC20Lookup', deployer);
  const contract = await Factory.deploy();
  await contract.waitForDeployment();

  console.log("Deployed at:", await contract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
