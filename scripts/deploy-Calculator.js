async function main() {
  const Calculator = await ethers.getContractFactory("Calculator");
  const calculator = await Calculator.deploy();

  await calculator.deployed();
  console.log("Calculator address:", calculator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
