#!/usr/bin/env node
import { program } from "commander";
import cliMd from "cli-markdown";

program
  .name("shivanandasai")
  .usage("[options]")
  .option("-r, --resume", "prints my resume");

program.parse(process.argv);

const { resume } = program.opts();

if (resume) {
  fetch("https://raw.githubusercontent.com/ssk090/ssk090/main/RESUME.md")
    .then((response) => response.text())
    .then((data) => {
      console.log(cliMd(data));
    })
    .catch((err) => console.log(err));
} else {
  fetch("https://raw.githubusercontent.com/ssk090/ssk090/main/README.md")
    .then((response) => response.text())
    .then((data) => {
      console.log(cliMd(data));
    })
    .catch((err) => console.log(err));
}

// program.outputHelp();
