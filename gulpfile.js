global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  newer: require('gulp-newer'),
  browserSync: require('browser-sync').create(),
  del: require('del'),
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  path: {
    config: require('./gulp/config'),
    jquery: './js/jquery.js',
    js: './js/**/*.js',
  }
};

$.path.config.forEach(function (path) {
  require(path)();
});