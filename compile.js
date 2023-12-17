"use strict";
const { compileFromFile } = require("json-schema-to-typescript");
const fs = require("fs");
fs.readdir(__dirname + "/schema/v1.6", function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // compile from file
    compileFromFile(`${__dirname}/schema/v1.6/${file}`).then((ts) =>
      fs.writeFileSync(`${__dirname}/v1.6/${file.replace(".json", ".d.ts")}`, ts),
    );
    console.log(file);
  });
});
