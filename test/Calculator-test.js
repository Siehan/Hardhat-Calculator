const { expect } = require("chai");

describe("Calculator contract", function () {
  it("Deployment should return the result of 2 numbers", async function () {
    const Calculator = await ethers.getContractFactory("Calculator");

    const calculator = await Calculator.deploy();

    expect(await calculator.add(1, 2)).to.equal(1 + 2);
    expect(await calculator.mul(1, 2)).to.equal(1 * 2);
    expect(await calculator.div(2, 1)).to.equal(2 / 1);
    await expect(calculator.div(2, 0)).to.be.revertedWith("Calculator can not divide digit 0");
    expect(await calculator.sub(2, 1)).to.equal(2 - 1);
    expect(await calculator.modulo(2, 2)).to.equal(2 % 2);
  });
});
