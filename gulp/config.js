'use strict';
var dest = './build';
var src = './app';
var gulp = './gulp';
var compression = require('compression');

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest,
      middleware: [compression()],
      proxy: 'localhost:3000',  // local node app address
      port: 5000,  // use *different* port than above
      notify: true
    }
  },
  sass: {
    src: src + '/sass/*.{sass,scss}',
    dest: dest,
    settings: {
      // Required if you want to use SASS syntax
      // See https://github.com/dlmanning/gulp-sass/issues/81
      sourceComments: 'map',
      imagePath: '/images' // Used by the image-url helper
    }
  },
  copy: {
    src: src + '/fonts/**',
    dest: dest + '/fonts'
  },
  gulp: {
    src: gulp
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },
  markup: {
    src: src + '/htdocs/**',
    dest: dest
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/javascript/global.coffee',
      dest: dest,
      outputName: 'global.js',
      // Additional file extentions to make optional
      extensions: ['.coffee', '.hbs'],
      // list of modules to make require-able externally
      require: ['jquery', 'underscore']
    },
    {
      entries: src + '/javascript/page.js',
      dest: dest,
      outputName: 'page.js'
      // list of externally available modules to exclude from the bundle
      // external: ['jquery', 'underscore']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest,
    cssOpt: {
      keepSpecialComments: 0
    }
  },
  minifyHtml: {
    opts: {spare:true},
    src: src + '/htdocs/**',
    dest: dest
  }
};
