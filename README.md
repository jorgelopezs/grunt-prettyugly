# grunt-prettyugly

> Minifies and combines css files using prettyugly module. The only difference is it doesn't optimize the css rules like grunt-cssshrink.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-prettyugly --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-prettyugly');
```

## The "prettyugly" task

### Overview
In your project's Gruntfile, add a section named `prettyugly` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  prettyugly: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `''`

The separator to add in between merged css files. Optional.

#### options.banner
Type: `String`
Default value: `''`

This is text that will be added to the beginning of the file. i.e. The header.

#### options.pretty
Type: `Boolean`
Default value: `FALSE`

By default grunt-prettyugly minifies css files. Specifiy this option as true to prettify css files instead. 

### Usage Examples

#### Default Options
In this example, the default options are used to minify and join `styles1.css` and `styles2.css`. So if the `styles1.css` file has the content `h1{color:#fff;}` and the `styles2.css` file had the content `p{padding:2em;}`, the generated result would be `h1{color:#fff}p{padding:2em}`

```js
grunt.initConfig({
  prettyugly: {
    options: {},
    files: {
      'dest/default_options.css': ['src/styles1.css', 'src/styles2.css'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to join and minify `styles1.css` and `styles2.css`. In this case the separator and banner option were used. So if the `styles1.css` file has the content `h1{color:#fff;}` and the `styles2.css` file had the content `p{padding:2em;}`, the generated result in this case would be `/* This is a banner */h1{color:#fff}/* --- */p{padding:2em}` 

```js
grunt.initConfig({
  prettyugly: {
    options: {
      separator: '/* --- */',
      banner: '/* This is a banner */',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/styles2.css'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
