import { HardhatRuntimeEnvironment } from "hardhat/types";
import { fullDeploy } from "./utils";

const adminAddress = process.env.ADMIN_ADDRESS;
const walletAddress = process.env.WALLET_ADDRESS;

export default async (hre: HardhatRuntimeEnvironment) => {
  const VaultProxiable = await fullDeploy(hre, {
    name: "VaultProxiable",
    constructorArgs: [],
    verify: true,
  });

  const Proxy = await fullDeploy(hre, {
    name: "ERC1967Proxy",
    constructorArgs: [
      VaultProxiable.address,
      VaultProxiable.contract.interface.encodeFunctionData(
        VaultProxiable.contract.interface.functions[
          "initialize(uint256,address,address)"
        ],
        [20, adminAddress, walletAddress]
      ),
    ],
  });

  console.log(`Deployed VaultProxiable at ${VaultProxiable.address}`);
  console.log(`Deployed Proxy at ${Proxy.address}`);
};
