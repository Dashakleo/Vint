'use strict';

module.exports = function() {
    $.gulp.task('sprite:img', function () {
        var spriteData = $.gulp.src('./source/images/*.png').pipe($.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }));

        var imgStream = spriteData.img
            .pipe($.buffer())
            .pipe($.imagemin())
            .pipe($.gulp.dest($.config.root + '/assets/img'));

        var cssStream = spriteData.css
            .pipe($.csso())
            .pipe($.gulp.dest($.config.root + '/assets/css'));

        return $.merge(imgStream, cssStream);
    })
};