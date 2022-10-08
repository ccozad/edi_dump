#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -i <file_name>")
 .option("i", { alias: "input-file-name", describe: "The name of the file to parse", type: "string"})
 .option("v", { alias: "verbose", describe: "Enable verbose logging", type: "boolean" })
 .argv;

const APP_NAME = "EDI Dump"
const APP_VERSION = "1.0.0";

function processFile(file, verbose) {
    if (verbose) {
        console.log(`Processing file ${options["input-file-name"]}`);
    }
}

function printHeader(appName, appVersion) {
    console.log(appName);
    console.log(`v${appVersion}`);
}

function main() {
    printHeader(APP_NAME, APP_VERSION);
    // Bail out early if the version was asked for
    if(options.version) {
        process.exit();
    }

    if (options["input-file-name"]) {
        processFile(options["input-file-name"], options.verbose);
    } else {
        console.error("Missing input file name!");
    }
}

if (require.main === module) {
    main();
}







