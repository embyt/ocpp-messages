"use strict";
const { compileFromFile } = require("json-schema-to-typescript");
const fs = require("fs");

/**
 * Decode HTML entities in comments
 * Converts HTML entities like &lt; &gt; &amp; etc. to their actual characters
 * @param {string} ts - The generated TypeScript code
 * @returns {string} - The transformed TypeScript code
 */
function decodeHtmlEntities(ts) {
  const entities = {
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&apos;": "'",
    "&#x27;": "'",
    "&#x2F;": "/",
    "&#39;": "'",
    "&#47;": "/",
  };

  return ts.replace(/&[#\w]+;/g, (entity) => {
    return entities[entity] || entity;
  });
}

/**
 * Extract inline enum types with more than 3 values into named type aliases
 * @param {string} ts - The generated TypeScript code
 * @param {string} propertyName - The property name for generating type name
 * @returns {string} - The transformed TypeScript code
 */
function extractLargeEnums(ts, propertyName) {
  const extractedTypes = [];
  const typeMap = new Map();

  // Match inline union types - handles both single-line and multi-line formats
  // Pattern matches:
  //   propertyName?: "value1" | "value2" ...;
  //   OR
  //   propertyName?:
  //     | "value1"
  //     | "value2" ...;
  const enumPattern =
    /(\w+)\?:\s*\n?\s*((?:\|\s*)?(?:"[^"]+"\s*(?:\||;)\s*\n?\s*)*(?:"[^"]+"))\s*;/gs;

  let transformed = ts;
  let match;
  const matches = [];

  // Collect all matches first (to avoid issues with string replacement during iteration)
  while ((match = enumPattern.exec(ts)) !== null) {
    matches.push({
      fullMatch: match[0],
      propName: match[1],
      enumValues: match[2],
    });
  }

  // Process each match
  for (const matchData of matches) {
    const { fullMatch, propName, enumValues } = matchData;

    // Extract all quoted values
    const values = enumValues.match(/"[^"]+"/g);
    if (values && values.length > 3) {
      // Generate type name: capitalize first letter and add "EnumType" suffix
      const typeName = propName.charAt(0).toUpperCase() + propName.slice(1) + "EnumType";

      // Format the enum type nicely
      const formattedEnum = values.map((v, i) => (i === 0 ? `\n  | ${v}` : `  | ${v}`)).join("\n");

      // Store extracted type if not already added
      if (!typeMap.has(typeName)) {
        extractedTypes.push(`export type ${typeName} =${formattedEnum};`);
        typeMap.set(typeName, true);
      }

      // Replace inline enum with type reference
      const replacement = `${propName}?: ${typeName};`;
      transformed = transformed.replace(fullMatch, replacement);
    }
  }

  // If we extracted any types, prepend them to the output
  if (extractedTypes.length > 0) {
    const lines = transformed.split("\n");
    const headerEndIndex = lines.findIndex(
      (line, i) => i > 0 && line.trim() === "" && lines[i - 1].includes("*/"),
    );

    if (headerEndIndex !== -1) {
      const header = lines.slice(0, headerEndIndex + 1).join("\n");
      const rest = lines.slice(headerEndIndex + 1).join("\n");
      transformed = header + "\n" + extractedTypes.join("\n\n") + "\n\n" + rest;
    } else {
      // Fallback: just prepend after first 6 lines
      const header = lines.slice(0, 6).join("\n");
      const rest = lines.slice(6).join("\n");
      transformed = header + "\n\n" + extractedTypes.join("\n\n") + "\n\n" + rest;
    }
  }

  return transformed;
}

// Compile v1.6 schemas
fs.readdir(__dirname + "/schema/v1.6", function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // compile from file
    compileFromFile(`${__dirname}/schema/v1.6/${file}`).then((ts) => {
      // Decode HTML entities in comments
      let transformedTs = decodeHtmlEntities(ts);
      // Extract large enums into named types
      transformedTs = extractLargeEnums(transformedTs, file.replace(".json", ""));
      fs.writeFileSync(`${__dirname}/v1.6/${file.replace(".json", ".d.ts")}`, transformedTs);
    });
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
    if (!file.endsWith(".json")) return;

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
        // Decode HTML entities in comments
        let cleanedTs = decodeHtmlEntities(ts);
        // Replace any remaining URN-based interface names with clean names
        cleanedTs = cleanedTs.replace(/export interface Urn\w+/g, `export interface ${baseName}`);
        // Extract large enums into named types
        cleanedTs = extractLargeEnums(cleanedTs, baseName);
        fs.writeFileSync(`${__dirname}/v2.0/${baseName}.d.ts`, cleanedTs);
      })
      .catch((err) => {
        console.error(`Error compiling ${file}:`, err.message);
      });
    console.log(file);
  });
});
