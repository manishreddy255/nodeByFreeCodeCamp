const { writeFileSync } = require("fs");

for (let i = 0; i < 100000; i++) {
  writeFileSync("./content/big-text.txt", `hello this is ${i}`, { flag: "a" });
}
