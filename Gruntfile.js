/*
 * grunt-prettyugly
 * https://github.com/jorge/grunt_prettyugly
 *
 * Copyright (c) 2016 jorge
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    //Configuration to be run (and then tested).
    prettyugly: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options.css': ['test/fixtures/styles1.css', 'test/fixtures/styles2.css']
        }
      },
      custom_options: {
        options: {
          separator: '/* separator */',
          banner : '/* merged styles */'
        },
        files: {
          'tmp/custom_options.css': ['test/fixtures/styles1.css', 'test/fixtures/styles2.css']
        }
      },
      minify_separate : { // minifies the css files but doesn't combines them
          
            expand: true,
            cwd : 'test/fixtures',
            src : ['*.css', '!*.min.css'],
            dest : 'tmp/',
            ext : '.min.css',
            extDot : 'first'
          
      },
      //prettifies and joins the 2 css files into one
      pretty_default_options : {
        options: {
          pretty: true
        },
        files : [{
          src : ['test/fixtures/styles1.min.css', 'test/fixtures/styles2.min.css'],
          dest : 'tmp/default_options_pretty.css'
        }]
      },

      //pretty option with custom options
      pretty_custom_options : {
        options : {
          pretty : true,
          separator : '/* separator */',
          banner : '/* merged styles */'
        },
        files : [{
          src : ['test/fixtures/styles1.min.css', 'test/fixtures/styles2.min.css'],
          dest : 'tmp/custom_options_pretty.css'
        }]
      },

      prettify_separate : { // prettifies the css files but doesn't combines them
          options : {
            pretty : true
          },
          files : [{
            expand: true,
            cwd : 'test/fixtures',
            src : ['*.min.css'],
            dest : 'tmp/',
            ext : '.css',
            extDot : 'first'
          }]
      },
    },


    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'prettyugly', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

  // grunt.registerTask('many_files', ['clean', 'prettyugly:prettify_separate', 'nodeunit']);

};
