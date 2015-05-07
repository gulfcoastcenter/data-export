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

console.log('building parms');
mis.parm.fromjsondir('./parm/')
.then(function(parmlist) {
   console.log('writing parms');
   return mis.parm.todir('./build/parm/', parmlist);
})
.then(function() {
   mis.deploy.parm();
});

