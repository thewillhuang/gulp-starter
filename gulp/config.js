var dest = "./build";
var src = './src';
var compression = require('compression');

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest,
      middleware: [compression(), function(req, res, next) {
          console.log(req.method, req.url);
        next();
      }]
    }
  },
  sass: {
    src: src + "/sass/*.{sass,scss}",
    dest: dest,
    settings: {
      // Required if you want to use SASS syntax
      // See https://github.com/dlmanning/gulp-sass/issues/81
      sourceComments: 'map',
      imagePath: '/images' // Used by the image-url helper
    }
  },
  copy: {
    src: src + "/fonts/**",
    dest: dest + "/fonts"
  },
  clean: {
    src: dest
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  markup: {
    src: src + "/htdocs/**",
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
      outputName: 'page.js',
      // list of externally available modules to exclude from the bundle
      // external: ['jquery', 'underscore']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  },
  minifyHtml: {
    opts: {spare:true},
    src: src + "/htdocs/**",
    dest: dest
  }
};
