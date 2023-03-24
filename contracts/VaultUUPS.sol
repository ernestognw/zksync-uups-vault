//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Proxiable.sol";
import "./Vault.sol";

contract VaultProxiable is Vault, Proxiable {
    constructor(address _logic, bytes memory _data) Proxiable(_logic, _data) {}

    function _authorizeUpgrade(
        address newImplementation
    ) internal virtual override onlyAdmin {}
}
