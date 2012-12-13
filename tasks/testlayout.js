/*
 * grunt-testlayout
 * https://github.com/tingan87/grunt-testlayout
 *
 * Copyright (c) 2012 Tingan Ho
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('testlayout', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('testlayout'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('testlayout', function() {
    return 'testlayout!!!';
  });

};
