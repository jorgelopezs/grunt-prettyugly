# grunt-prettyugly

> Minifies and combines css files using prettyugly module.

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

A string value that is used to do something with whatever.

#### options.banner
Type: `String`
Default value: `''`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `styles1.css` file has the content `h1{color:#fff;}` and the `styles2.css` file had the content `p{padding:2em;}`, the generated result would be `h1{color:#fff}p{padding:2em}`

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
In this example, custom options are used to do something else with whatever else. So if the `styles1.css` file has the content `h1{color:#fff;}` and the `styles2.css` file had the content `p{padding:2em;}`, the generated result in this case would be `/* This is a banner */h1{color:#fff}/* --- */p{padding:2em}` 

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
