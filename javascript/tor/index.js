const platform = require('os').platform(); // linux, darwin, win32
const alpha = false; // get latest alpha version
const getLatestTorBrowserVersion = require('latest-torbrowser-version');
 
getLatestTorBrowserVersion(platform, alpha)
  .then(console.info, console.error);
