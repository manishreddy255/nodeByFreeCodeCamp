const amount = 25;

if (amount < 30) {
  console.log("this is not working");
} else {
  console.log("this shit is working");
}

amount > 40 ? console.log("hey fucks") : console.log("hey double fucks");

// the concept of global variables in node
// so these are global variables which we will use so remembering is important

// __dirname - path to current directory
// __filename - filename
// require - function to use modules(Common to js)
// moudle - info about current module(file)
// process - info about env where the program is being executed

/*****
 * OS module
 * */

const os = require("os");
// console.log(os)

// info about current user

const user = os.userInfo();

console.log(user);

// method return the system uptime in seconds

const uptime = os.uptime();

console.log(`The system up time is ${uptime} seconds`);

//

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
