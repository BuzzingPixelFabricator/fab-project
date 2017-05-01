/*----------------------------------------------------------------------------*\
    # Copyright 2017, BuzzingPixel, LLC

    # This program is free software: you can redistribute it and/or modify
    # it under the terms of the Apache License 2.0.
    # http://www.apache.org/licenses/LICENSE-2.0

    # This Gruntfile is just a gateway to Fabricator's Gruntfile
\*----------------------------------------------------------------------------*/

/* globals module */

module.exports = function(grunt) {
    // Set up configuration
    require('./node_modules/fab.grunt-build/src/Gruntfile.js')(grunt);
};
