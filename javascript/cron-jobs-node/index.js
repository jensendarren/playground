const cron = require('node-cron');

/*
  https://www.npmjs.com/package/node-cron

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