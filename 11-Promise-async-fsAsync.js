/****
 * This is the last method or we can call it over simplified method
 * it turns read file and write file to promise
 * so we can easily use it with async await and get the results
 * */

const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");

    await writeFile(
      "./content/fucker.txt",
      `This is fucking awesome: ${first}
     ${second}`
    );
    console.log(first + second);
  } catch (error) {
    console.log(error);
  }
};

start();

// let us know about promise then promise is invoked by returning
// new Promise for a function and a callback with param of resolve and reject
// is given which act as
// resolve give the result of successful data extraction
// reject give the result if there is an error

// then that data is gathered when the function with promise is invoked
// then we use .then((result) => ) we extract
// and error is caught by .catch((err) => ) chaining

/****
 * file system using promises
 * The below method is using real promises without any utilities to get the result
 * */

/*const getText = (path) => {
   return new Promise((resolve, reject) => {
     readFile(path, "utf8", (err, data) => {
       if (err) {
         reject(err);
       } else {
         resolve(data);
       }
     });
   });
 };
 
 getText("./content/first.txt")
   .then((result) => console.log(result))
   .catch((err) => console.log(err));
   */

/****
 * File system using async await
 * in this async we attach async to a function and in that await is placed
 * for things that have promises
 * so await is only used for things that have promises
 * */

/*const getText = (path) => {
   return new Promise((resolve, reject) => {
     readFile(path, "utf8", (err, data) => {
       if (err) {
         reject(err);
       } else {
         resolve(data);
       }
     });
   });
 };
 
 
 const start = async () => {
   try {
     const first = await getText("./content/first.txt");
     console.log(first);
   } catch (error) {
     console.log(err);
   }
 };

 */

// as the getText returns a promise we use await to get the result of it

/***
 * using utility function in node to
 * get the promises easily
 * */

/*const { readFile, writeFile } = require("fs")
 const util = require("util");
 
 const readFilePromise = util.promisify(readFile);
 const writeFilePromise = util.promisify(writeFile);
 
 const start = async () => {
   try {
     // const first = await readFilePromise("./content/first.txt", "utf8");
     // const second = await readFilePromise("./content/second.txt", "utf8");
     // await writeFilePromise(
     //   "./content/result-mind-grenade.txt",
     //   `This is awesome: ${first} ${second}`
     // );
   } catch (error) {
     console.log(error);
   }
 };
 */
