/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
*/

/* eslint-disable no-console*/

import { generate, extend } from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs"; // This comes from node
import chalk from "chalk";

// Extend JSF with the fake libs you want to use.
extend("faker", () => require("faker")); //Extend json-schema-faker to use faker
const json = JSON.stringify(generate(schema)); // Stringify the schema

fs.writeFile("./src/api/db.json", json, function (err) {
   if (err) {
      return console.log(chalk.red(err));
   } else {
      console.log(chalk.green("Mock data generated."));
   }
});

