require('marko/node-require').install();

require('marko/compiler').defaultOptions.preserveWhitespace = true;

require('./template.marko').render({}, process.stdout);