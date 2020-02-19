const program = require("commander");
const shell = require("shelljs");
const fs = require("fs-extra");
const colors = require("colors");
const replace = require("replace");

// execute file
const createAll = require("./actions/create-all");

program.version("1.0.0");

program
  .command("all <path>")
  .option("-t,--template", "include boiler plate?")
  .action(createAll);

program.parse(process.argv);
