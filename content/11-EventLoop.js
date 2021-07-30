/****
 * Event loop in nodejs
 * */

// event loop is what allows node.js to perform non-blocking
// io operations despite the javascript being a singlthreaded
// application

// by offloading(performing them in queue) operations to the
// system kernel whenever possible

// as the code should be non-blocking
// That why js is now running on callbacks and promises and async await

// https://nodejs.dev/learn/the-nodejs-event-loop#blocking-the-event-loop

// https://jamboard.google.com/d/10C9sDWgMTROZmbb2YII5ffyJnigRgm0KiO-Tio-iJDs/viewer?f=0

/****
 * js is synchronous and singl threaded
 * */

// so it performs tasks one after another
// let us take a example

// console.log("start the task");
// console.time();
// for (let i = 0; i < 19999; i++) {
//   let tihing = "man";
// }

// console.timeEnd();

// console.log("nexttask");

// in the upper one it executes it line by line

// now  we will look at this

// console.log("first TAsk");

// setTimeout(() => {
//   console.log("secondtask");
// }, 1000);

// console.log("next task");

/*****
 * Event looo examples
 * */

// Async version of read file method

const { readFile } = require("fs");

console.log("start first task");

readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  // this is offloaded
  // after the response comes back then only we will invoke it
  console.log(res);
  console.log("complete first task");
});

console.log("second task");
