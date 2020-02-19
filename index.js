const program = require("commander");
// const shell = require("shelljs");

const colors = require("colors");

// execute file
const createAll = require("./actions/create-all");

program.version("1.0.0");

program
  .command("all <path>")
  // .option("-t,--template", "include boiler plate?")
  .action(createAll);

program.parse(process.argv);
