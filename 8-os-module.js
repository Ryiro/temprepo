const os = require('os');

const user = os.userInfo();


//user info

//console.log(user);

//system uptime in seconds

// console.log('system uptime ' + os.uptime()/3600);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);