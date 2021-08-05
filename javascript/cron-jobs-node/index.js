const cron = require('node-cron');
const express = require('express');

app = express();

// Schedule tasks to be run on the server.
/*

  * * * * * *
  | | | | | |
  | | | | | day of week
  | | | | month
  | | | day of month
  | | hour
  | minute
  second ( optional )

*/
cron.schedule('* * * * *', function() {
  console.log('running a task every minute'); // replace with whatever function you need to perform!
});

app.listen(3000);