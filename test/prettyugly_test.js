'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.prettyugly = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options.css');
    var expected = grunt.file.read('test/expected/default_options.css');
    test.equal(actual, expected, 'grunt-prettyugly with default options.');

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_options.css');
    var expected = grunt.file.read('test/expected/custom_options.css');
    test.equal(actual, expected, 'grunt-prettyugly with custom options.');

    test.done();
  },
  minify_separate_css1 : function(test){
    test.expect(1);

    var actual = grunt.file.read('tmp/styles1.min.css');
    var expected = grunt.file.read('test/expected/styles1.min.css');
    test.equal(actual, expected, 'Make css ugly into separate files. Verify styles1.css');

    

    test.done();
  },
  minify_separate_css2 : function(test){
    test.expect(1);
    var actual = grunt.file.read('tmp/styles2.min.css');
    var expected = grunt.file.read('test/expected/styles2.min.css');
    test.equal(actual, expected, 'Make css ugly into separate files. Verify styles2.css');
    test.done();
  },
  pretty_default_options : function(test){
    test.expect(1);
    var actual = grunt.file.read('tmp/default_options_pretty.css');
    var expected = grunt.file.read('test/expected/default_options_pretty.css');
    test.equal(actual, expected, 'Make css pretty and combines the files.');
    test.done();
  },
  pretty_custom_options : function(test){
    test.expect(1);
    var actual = grunt.file.read('tmp/custom_options_pretty.css');
    var expected = grunt.file.read('test/expected/custom_options_pretty.css');
    test.equal(actual, expected, 'Make css pretty and combines the files.');
    test.done();
  },
  prettify_separate_css1 : function(test){
    test.expect(1);

    var actual = grunt.file.read('tmp/styles1.css');
    var expected = grunt.file.read('test/expected/styles1.css');
    test.equal(actual, expected, 'Make css ugly into separate files. Verify styles1.css');

    

    test.done();
  },
  prettify_separate_css2 : function(test){
    test.expect(1);
    var actual = grunt.file.read('tmp/styles2.css');
    var expected = grunt.file.read('test/expected/styles2.css');
    test.equal(actual, expected, 'Make css ugly into separate files. Verify styles2.css');
    test.done();
  }
};
