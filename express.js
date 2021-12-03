const express = require("express");
const app = express();
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const config=require("./config.json");

const env=argv.env==="developer"?config.development:config.service

app.listen(env.PORT, () => {
    console.log(`Server Running At port ${env.PORT}`);
  });
