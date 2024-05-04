



// // const { ethers } = require("hardhat");

// // async function main() {
// //     const [deployer] = await ethers.getSigners();

// //     console.log("Deploying contracts with the account:", deployer.address);

// //     const PayLisk = await ethers.getContractFactory("PayLisk");
// //     const payLisk = await PayLisk.deploy();

// //     console.log("PayLisk deployed to address:", payLisk.address);
// // }

// // //Deploying contracts with the account: 0xaaD75b6D076E7616604FFBc70d5D8a567697417c
// // //PayLisk deployed to address: 0x0F4d693fca7C668F0B0664846627aE2ea6810f81

// // main().catch(error => {
// //     console.error(error);
// //     process.exitCode = 1;
// // });


// // const { ethers } = require("hardhat");

// // async function main() {
// //   const [deployer] = await ethers.getSigners();

// //   console.log("Deploying contracts with the account:", deployer.address);

// //   const PayLisk = await ethers.getContractFactory("PayLisk");
// //   const payLisk = await PayLisk.deploy('0xaaD75b6D076E7616604FFBc70d5D8a567697417c');
// //   await payLisk.deployed();

// //   console.log("PayLisk deployed to:", payLisk.address);


// // }

// // main()
// //   .then(() => process.exit(0))
// //   .catch((error) => {
// //     console.error(error);
// //     process.exit(1);
// //   });




// const { ethers } = require("hardhat");

// async function main() {
//     const [deployer] = await ethers.getSigners();

//     console.log("Deploying PayLisk contract with the account:", deployer.address);

//     const PayLisk = await ethers.getContractFactory("PayLisk");
//     const payLisk = await PayLisk.deploy(); // No arguments are needed for deployment

//     await payLisk.deployed();

//     console.log("PayLisk contract deployed to target:", payLisk.address);
//     //0x04832298a74f9937D7251d5B5e88C6213C0B946d
// }

// main().catch(error => {
//     console.error(error);
//     process.exitCode = 1;
// });

import { ethers } from "hardhat";

async function main(): Promise<void> {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying PayLisk contract with the account:", deployer.address);

    const PayLisk = await ethers.getContractFactory("PayLisk");
    const payLisk = await PayLisk.deploy(); // No arguments are needed for deployment

    await payLisk.deployed();

    // Set the target property for Lisk network
    const target: string = '0xaaD75b6D076E7616604FFBc70d5D8a567697417c';

    console.log("PayLisk contract deployed to:", payLisk.address);
    console.log("Target set to:", target);
}

main().catch((error: Error) => {
    console.error(error);
    process.exitCode = 1;
});



// import { ethers } from "hardhat";

// async function main() {
//     const [deployer] = await ethers.getSigners();

//     console.log("Deploying PayLisk contract with the account:", deployer.address);

//     const PayLisk = await ethers.getContractFactory("PayLisk");
//     const payLisk = await PayLisk.deploy(); // No arguments are needed for deployment

//     await payLisk.deployed();

//     // Set the target property for Lisk network
//     const target = '0xaaD75b6D076E7616604FFBc70d5D8a567697417c';

//     console.log("PayLisk contract deployed to:", payLisk.address);
//     console.log("Target set to:", target);
// }

// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });
