import { HardhatRuntimeEnvironment } from "hardhat/types";
import { fullDeploy } from "./utils";

const adminAddress = process.env.ADMIN_ADDRESS;
const walletAddress = process.env.WALLET_ADDRESS;

export default async (hre: HardhatRuntimeEnvironment) => {
  const Vault = await fullDeploy(hre, {
    name: "Vault",
    constructorArgs: [],
    verify: true,
  });

  const VaultProxiable = await fullDeploy(hre, {
    name: "VaultProxiable",
    constructorArgs: [
      Vault.address,
      Vault.contract.interface.encodeFunctionData(
        Vault.contract.interface.functions[
          "initialize(uint256,address,address)"
        ],
        [20, adminAddress, walletAddress]
      ),
    ],
    verify: true,
  });

  console.log(`Deployed VaultProxiable at ${VaultProxiable.address}`);
  console.log(`Deployed Vault at ${Vault.address}`);
};
