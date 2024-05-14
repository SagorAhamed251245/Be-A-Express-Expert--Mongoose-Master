const fs = require("fs");

const result = fs.readFile("./text/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("reedind err");
  } else {
    fs.writeFile("./text/write2.txt", data, "utf-8", (err) => {
      if (err) {
        throw Error("writeing error");
      }
    });
  }
});

console.log(result);
