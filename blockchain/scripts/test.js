import hre from "hardhat";
import { ethers } from "ethers";

async function main() {

  const artifact = await hre.artifacts.readArtifact("HospitalRating");

  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
  const signer = await provider.getSigner();

  const contract = new ethers.Contract(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    artifact.abi,
    signer
  );

  console.log("Adding hospital...");
  await contract.addHospital("Apollo");

  const count = await contract.hospitalCount();
  console.log("Hospital Count:", count.toString());
}

main().catch(console.error);