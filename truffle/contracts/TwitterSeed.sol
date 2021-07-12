// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import './ITwitter.sol';

contract TwitterSeed {
  ITwitter _twitter;

  constructor(address twitterContractAddress) public {
    _twitter = ITwitter(twitterContractAddress);

    // seed some tweets
    _twitter.tweet('tweeting first tweet from seed');
    _twitter.tweet('tweeting second tweet from seed');
    _twitter.tweet('tweeting third tweet from seed');
  }
}