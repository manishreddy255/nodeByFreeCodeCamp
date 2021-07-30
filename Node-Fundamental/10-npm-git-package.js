// npm -global command comes with node
// npm --version

// local dependency - use it in this particular project
// npm i <package name>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (important info about the project is in this)
// npm init(step by step , press enter to skip)
// npm init -y(everything default)

// so to use the app anywhere you need to upload it you can use github

// so to use it create a repo and then upload the files in the described way
// so now the files are hosted in github
// now just clone it and use it
/// so when we need dependencies we will just use the command
// npm install in that file

/// then the dependencies in the package.json are installed enabling use to cruise through

/***
 * Installing dependencies as devDependencies
 * */

// in that a dependency is installed as dev dependency
// which means it can only be used while development
// and is not included while working

// command is npm i <packageName> -D

/***
 * Script in package.json
 * */

// in scrpit we specify commands and what happens when a command is run
/// like ex

// scirpt = {
//   start: "node app.js",
//   dev: "nodemon app.js",
// };

// we can run it using "npm run <namegiven>"

// like that we can create our own commands

/*****
 * package lock.json
 *
 * it is used to track the exzct version of the modules used in the
 * app
 * so the won't be broken
 * */
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
