'use strict';

var dir = {
    sass: {
        src: './src/sass/**/*.scss',
        dest: './dist/css'
    },
    js: {
    	src: './src/js/**/*.js',
    	dest: './dist/js'
    }
};

var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');

gulp.task('sass', function () {
    return gulp.src(dir.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dir.sass.dest));
});

gulp.task('compress', function() {
  gulp.src(dir.js.src)
    .pipe(minify({
        ext:{
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest(dir.js.dest))
});

gulp.task('watch', function () {
    gulp.watch(dir.sass.src, ['sass']);
    gulp.watch(dir.js.src, ['compress']);
});