var util = require('mis-util');
var config = require('./config.ignore.json');

var mis = util({
   sysname: '/c1/FRSH',
   connect: {
      host: 'gccmhc',
      user: 'tim',
      password: config.user 
   },
   cron: {
      user: 'datamgr',
      pass: config.cron 
   },
   parm_path: {
      local: './build/parm/'
   }
});

mis.script.run([
   {name: 'sql-export',
      args: ['ISNSURVY']
   }
]);
