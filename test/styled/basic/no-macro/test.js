const swc = require("@swc/core");
const path = require('path');

const { readFileSync, writeFileSync } = require('fs');


const file = path.resolve(__dirname, 'input.js')
const code = readFileSync(file, { encoding: 'utf-8' });
swc
  .transform(code, {
    // Some options cannot be specified in .swcrc
    filename: "input.js",
    sourceMaps: true,

    // All options below can be configured via .swcrc
    jsc: {
        "parser": {
            "syntax": "ecmascript",
            "jsx": false
          },
          "target": "es2022",
      "experimental": {
        "plugins": [
          [
            "emotion-swc-plugin",
            {}
          ]
        ]
      },
      transform: {},
    },
  })
  .then((output) => {
      const fileOutput = path.resolve(__dirname, 'output.js')
    writeFileSync(fileOutput, output.code)
  });