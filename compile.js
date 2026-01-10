"use strict";
const { compileFromFile } = require("json-schema-to-typescript");
const fs = require("fs");

// Compile v1.6 schemas
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

// Compile v2.0 schemas with custom naming
const { compile } = require("json-schema-to-typescript");

fs.readdir(__dirname + "/schema/v2.0", function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Skip if not a JSON file
    if (!file.endsWith('.json')) return;
    
    // Extract base name (e.g., "AuthorizeRequest" from "AuthorizeRequest.json" or "AuthorizeRequest_v1p0.json")
    const baseName = file.replace(/(_v1p0)?\.json$/, "");
    const filePath = `${__dirname}/schema/v2.0/${file}`;

    // Read file and strip BOM if present
    let content = fs.readFileSync(filePath, "utf8");
    if (content.charCodeAt(0) === 0xfeff) {
      content = content.slice(1);
    }

    const schema = JSON.parse(content);

    // compile from schema
    compile(schema, baseName)
      .then((ts) => {
        // Replace any remaining URN-based interface names with clean names
        const cleanedTs = ts.replace(/export interface Urn\w+/g, `export interface ${baseName}`);
        fs.writeFileSync(`${__dirname}/v2.0/${baseName}.d.ts`, cleanedTs);
      })
      .catch((err) => {
        console.error(`Error compiling ${file}:`, err.message);
      });
    console.log(file);
  });
});
