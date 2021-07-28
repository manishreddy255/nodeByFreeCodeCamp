/**
 * Path module
 * */

const path = require("path");

// this object shows platform specific path seperator
// so we can use it to seperate paths
console.log(path.sep);

// it joins folders if we give folder names in order
const filePath = path.join("/content", "subfolder", "intin.txt");
console.log(typeof filePath);

// it is used to get the base of the path, like
// last one
const base = path.basename(filePath);
console.log(base);

// absolute is the total path of the file
// dirname is the name of the current directory
const absolute = path.resolve(__dirname, "content", "subfolder", "intin.txt");
console.log(__dirname);
console.log(absolute);
