/****
 * Async file system
 * */

const { readFile, writeFile } = require("fs");

console.log("Start");

readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }

  //   console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    // console.log(res);
    const second = res;

    writeFile(
      "./content/result-sync.txt",
      `Here is the result: ${first}, ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log("done with the task");
      }
    );
  });
});

console.log("Start next task");
