'use strict';

const path = require('path');

const presets = [
  "@babel/preset-env",
  {

  }
];

const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ["./src/"],
      // alias: {
      //   "~": "./src/components"
      // }
    }
    // require.resolve('@babel/plugin-module-resolver')
  ]

];

module.exports = { presets, plugins };

//https://babeljs.io/docs/en/next/babel-node.html
