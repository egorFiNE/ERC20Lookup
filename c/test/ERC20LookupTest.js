const chai = require('chai');
const { solidity } = require('ethereum-waffle');

chai.use(solidity);
const expect = chai.expect;

describe("ERC20Lookup", function () {
  it("should lookup", async () => {
    const ERC20Lookup = await ethers.getContractFactory('ERC20Lookup');
    const erc20Lookup = await ERC20Lookup.deploy();

    const TestToken = await ethers.getContractFactory('TestToken');

    const testToken1 = await TestToken.deploy('TEST1', 6);
    await testToken1.deployed();

    const testToken2 = await TestToken.deploy('TEST2', 7);
    await testToken2.deployed();

    const result = await erc20Lookup.lookup([
      testToken1.address,
      testToken2.address
    ]);

    expect(result.length).to.be.eq(2);
    expect(result[0].symbol).to.be.eq('TEST1');
    expect(result[1].symbol).to.be.eq('TEST2');
    expect(result[0].decimals).to.be.eq(6);
    expect(result[1].decimals).to.be.eq(7);
  });
});
