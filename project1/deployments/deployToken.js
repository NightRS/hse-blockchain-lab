const hre = require("hardhat");

const main = async () => {
    const initialSupply = hre.ethers.utils.parseEther("100000");

    const [deployer] = await hre.ethers.getSigners();
    console.log(`Address deploying the contract --> ${deployer.address}`);

    const tokenFactory = await hre.ethers.getContractFactory("AlexToken");
    const contract = await tokenFactory.deploy(initialSupply);

    console.log(`Token contract address --> ${contract.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
