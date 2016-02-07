/*
 * grunt-prettyugly
 * https://github.com/jorge/grunt_prettyugly
 *
 * Copyright (c) 2016 jorge
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('prettyugly', 'Minifies and combines css files using prettyugly module.', function() {
    var prettyugly = require('prettyugly');

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();
    

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      //read the source files
      src = src.map(function(filepath) {
        var fileContents = grunt.file.read(filepath); 

        if(fileContents){
            //uglify the css contents
            fileContents = prettyugly.ugly(fileContents);
        }else{
          //TODO;; Log message if verbose option
          grunt.log.warn("Couldn't read " + filepath + " -- Skiped");
        }

        return fileContents;
      });

     // console.log(src);
      if(options.separator){
        src = src.join(grunt.util.normalizelf(options.separator));
      }else{
        src = src.join('');
      }

      if(options.banner){
        src = options.banner + src;
      }

      // Handle options.
      //src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
