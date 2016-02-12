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

        if(!fileContents){
          grunt.log.warn("Couldn't read " + filepath + " -- Skiped");
        }
        return fileContents;
      });

      

      //join the files. Add /*!{SEPARATOR}*/ as a placeholder for the separator later
      src = src.join('/*!{SEPARATOR}*/');

      

       //uglify the css contents or prettify if the pretty option is set
      if(options.pretty){
        src = prettyugly.pretty(src);
      }else{
        src = prettyugly.ugly(src);
      }

      //replace the separator placeholder with the specified separator in options
      if(options.separator){
        src = src.replace('/*!{SEPARATOR}*/', grunt.util.normalizelf(options.separator));
      }else{
        // replace the separator holder with the added break lines
        if(options.pretty){
          src = src.replace('\n/*!{SEPARATOR}*/\n', '');
        }else{
          // replace in ugly - there are no new lines
          src = src.replace('/*!{SEPARATOR}*/', '');
        }
      }

      //append the banner to our css file
      if(options.banner){
        if(options.pretty){
          // prettifying add the banner with a new line at the top and bottom
          src = '\n' + options.banner + '\n' + src;
        }else{
          // uglifying just add the banner to the css file
          src = options.banner + src;
        }
        
      }

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
