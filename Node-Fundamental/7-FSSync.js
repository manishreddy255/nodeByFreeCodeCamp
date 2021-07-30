/******
 * File System moudle
 * */

// it has async and non blocking file system
// sync blocking file system

// const fs = require("fs");

// console.log(fs);
// import { readFileSync, writeFileSync } from "fs"; => this is es6 format of doing things

const { readFileSync, writeFileSync } = require("fs");

// read file sync is used to read the data of the given file name
// which is given at the bracket and encoding is also given here which can
// be choosed as utf-8

console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first);
// console.log(second);

// write filesync have two parameters
// 1st one is path with file name if file name is not included
// then node will create one

// 2nd is the data you will write the given file
// you can write it in anyway
// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result ${first} , ${second}`
// );
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first} , ${second}`,
  // if flag is a then it willl append to the result
  // if flag is not specified then it will over ride with the result
  { flag: "a" }
);

console.log("done with the next one");
console.log("starting thre next one");

/***
 * Problem with sync File System
 * */

// in sync file system the code is blocking so
// one operation needs to be completed inorder for the next operation to start
/// but it will be problem if that happens and the user have to wait
