//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Proxiable.sol";
import "./Vault.sol";

contract VaultProxiable is Vault, Proxiable {
  function _beforeUpgrade(address newImplementation) internal virtual override onlyAdmin {
  }
}

contract VaultProxiableV2 is VaultV2, Proxiable {
  function _beforeUpgrade(address newImplementation) internal virtual override onlyAdmin {
  }
}

contract VaultProxiableV3 is VaultV3, Proxiable {
  function _beforeUpgrade(address newImplementation) internal virtual override onlyAdmin {
  }
}
