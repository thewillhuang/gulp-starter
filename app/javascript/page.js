// Browserify entry point for the page.js bundle (yay JavaScript!)

var $ = require('jquery');
// var jQuery = require('jquery');
var _ = require('underscore');
// global.js already contains jQuery, so in our config.js file, we
// are exposing it to other files like this one in the `require` array.
// Also in config.js, jquery is listed in `external` array for this bundle.
// This combination lets this file use the jquery module bundled with
// global.js, instead including it twice!
require('bootstrap');
console.log('page.js loaded!');
