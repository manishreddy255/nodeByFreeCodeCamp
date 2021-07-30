/****
 * Event driven programming
 * in this certain functions are attached to events and they are executed upon
 * trigerring of those events
 * it is heavily used in node.js
 * */

// // now with new we make an instance of EvenEmitte
// // instance is reusable thing

/*

event creation and emitting it

const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received of ${name} with id: ${id}`);
});
customEmitter.on("response", () => {
  console.log(`some other logic boys`);
});
customEmitter.emit("response", "sunil", 78);

*/
// // by using instance of event emitter
// // we use .on to create custom event and response for it
// // and by using .emit we respond to that event
// // you can use the same event and make number of responses possible

const http = require("http");

const server = http.createServer();

// this request is an event and it is emitted
// server has the method "on" and it is event method
server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen("5000", () => {
  console.log(" hey it got started");
});
