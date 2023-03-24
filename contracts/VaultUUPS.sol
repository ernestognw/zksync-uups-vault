//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "./Vault.sol";

contract VaultProxiable is Vault, UUPSUpgradeable {
    function _authorizeUpgrade(
        address newImplementation
    ) internal virtual override onlyAdmin {}
}
