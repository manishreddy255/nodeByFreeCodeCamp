// down one is local
const secret = "SUPER SECRET";
// we are sharing these
const john = "john";
const peter = "peter";

/// as every file is a module in node js
// so we can use module object to access things

module.exports = {
  john,
  peter,
};
