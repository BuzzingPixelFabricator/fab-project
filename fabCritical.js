/* jshint node: true */

// Define our project root
let path = require('path');
global.projectRoot = path.resolve(__dirname);

// Run the build script
require('./node_modules/fab-build-next/src/fabCritical.js');
