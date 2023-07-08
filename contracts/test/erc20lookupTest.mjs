import { expect } from 'chai';

describe("erc20lookup", function () {
  it("should lookup", async () => {
    const ERC20Lookup = await ethers.getContractFactory('ERC20Lookup');
    const erc20Lookup = await ERC20Lookup.deploy();
    await erc20Lookup.waitForDeployment();

    const TestToken = await ethers.getContractFactory('TestToken');

    const testToken1 = await TestToken.deploy('TEST1', 'test one', 6);
    await testToken1.waitForDeployment();

    const testToken2 = await TestToken.deploy('TEST2', 'test two', 7);
    await testToken2.waitForDeployment();

    const result = await erc20Lookup.lookup([
      await testToken1.getAddress(),
      await testToken2.getAddress()
    ]);

    expect(result.length).to.be.eq(2);
    expect(result[0].symbol).to.be.eq('TEST1');
    expect(result[1].symbol).to.be.eq('TEST2');
    expect(result[0].name).to.be.eq('test one');
    expect(result[1].name).to.be.eq('test two');
    expect(result[0].decimals).to.be.eq(6);
    expect(result[1].decimals).to.be.eq(7);
  });
});
