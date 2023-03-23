import { HardhatRuntimeEnvironment } from "hardhat/types";
import { fullDeploy } from "./utils";

const adminAddress = process.env.ADMIN_ADDRESS;
const walletAddress = process.env.WALLET_ADDRESS;

export default async (hre: HardhatRuntimeEnvironment) => {
  const VaultProxiable = await fullDeploy(hre, {
    name: "VaultProxiable",
    constructorArgs: [],
  });
  const Vault = await fullDeploy(hre, {
    name: "Vault",
    constructorArgs: [],
  });

  console.log(`Deployed VaultProxiable at ${VaultProxiable.address}`);
  console.log(`Deployed Vault at ${Vault.address}`);

  const initializeHandle = await Vault.contract.initialize(
    20,
    adminAddress,
    walletAddress
  );
  await initializeHandle.wait();

  console.log("Initialized vault");
};
