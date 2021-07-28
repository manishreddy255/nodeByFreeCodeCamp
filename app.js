// npm -global command comes with node
// npm --version

// local dependency - use it in this particular project
// npm i <package name>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (important info about the project is in this)
// npm init(step by step , press enter to skip)
// npm init -y(everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
