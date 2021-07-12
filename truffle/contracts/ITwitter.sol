pragma solidity >= 0.5.0 < 0.7.0;
interface ITwitter {
  function tweet(string memory contents) external;
}