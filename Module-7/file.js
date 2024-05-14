const fs = require("fs");
const readText = fs.readFileSync("./text/read.txt", "utf-8");
const WriteText = fs.writeFileSync("./text/writes.txt", readText);
console.log(WriteText);

console.log({ readText });
