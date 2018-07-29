'use strict';

// noinspection JSAnnotator
global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
    gulp: require('gulp'),
    del: require('del'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
    spritesmith: require('gulp.spritesmith'),
    buffer: require('vinyl-buffer'),
    csso: require('gulp-csso'),
    imagemin: require('gulp-imagemin'),
    merge: require('merge-stream'),
    fs : require('fs'),
	sassGlob : require('gulp-sass-glob')
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'copy:image',
      'copy:fonts',
    'css:foundation',
    'sprite:svg',
      'sprite:img'

  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
