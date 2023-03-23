// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol";

abstract contract Proxiable is ERC1967Upgrade {
    function upgradeTo(address newImplementation) external virtual {
        _beforeUpgrade(newImplementation);
        _upgradeTo(newImplementation);
    }

    function upgradeToAndCall(
        address newImplementation,
        bytes memory data
    ) external payable virtual {
        _beforeUpgrade(newImplementation);
        _upgradeToAndCall(newImplementation, data, true);
    }

    function _beforeUpgrade(address newImplementation) internal virtual;
}
