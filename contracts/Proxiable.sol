// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

abstract contract Proxiable is UUPSUpgradeable {
    constructor(address _logic, bytes memory _data) payable {
        assert(
            _IMPLEMENTATION_SLOT ==
                bytes32(uint256(keccak256("eip1967.proxy.implementation")) - 1)
        );
        _upgradeToAndCall(_logic, _data, false);
    }
}
