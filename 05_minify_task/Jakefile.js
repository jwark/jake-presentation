'use strict'

var minify = require('jake-uglify').minify;

desc('minify my app files for the web')
minify({'my-app-min.js': [
    'src/jquery.js',
    'src/simple1.js',
    'src/simple2.js'
]});

