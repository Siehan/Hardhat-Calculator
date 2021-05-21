async function main() {
  const [deployer] = await ethers.getContractFactory("Calculator");
  console.log("Deploying contracts with calculator", deployer.adress);

  const calculator = await Calculator.deploy();
  console.log("Calculator address:", calculator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


    const Calculator = await hre.ethers.getContractFactory('Calculator');
  const calculator = await Calculator.deploy();

  await calculator.deployed();

  console.log("Calculator deployed to:", calculator.address);
}
