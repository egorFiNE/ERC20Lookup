module.exports = async function({ deployments }) {
  const signers = await ethers.getSigners();

  await deployments.deploy('ERC20Lookup', {
    from: signers[0].address,
    args: [],
    log: true,
  });
};
