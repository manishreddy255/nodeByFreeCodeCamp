/******
 * Streams are used to read and write sequentially
 * when we have to handle and manipulate continuous data / streaming data
 * continuous data
 * */

/****
 * writable -- used to write data sequentially
 * readable -- used to read data sequentially
 * duplex -- used to read and write data sequentially
 * transform -- where data can be modified while reading and writing
 * */

/***
 * while reading a data from a file using sync or async we store the data in a
 * variable, but for bigger data that variable won't be sufficient
 * so we use read stream option
 * */

const { createReadStream } = require("fs");

// in createReadStream it emits an event which we can log result
// in createReadStream we can give how much should be the size of chunks
// so that we can read chunks in that way and that can be
// modified by using highwatermark property
// and encoding is also specified in this

const stream = createReadStream("./content/big-text.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

/****
 * default chunk 64kb
 * last buffer is remainder
 * highWaterMark - controlSize
 * by default the size of the buffer is 64kb
 * each chunk is of size 64 kb and next chunk is 64kb
 * */

// stream is instance created from createReadStream instance
// it is an emitter so we use .on use events

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
