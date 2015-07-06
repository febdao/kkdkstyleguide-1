'use strict';

var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		concatCss = require('gulp-concat-css'),
		reload = browserSync.reload;

gulp.task('server',['css'],function(){
	browserSync({
		notify: false,
		server: {
			baseDir: '.'
		}
	});
	gulp.watch(['css/style.css'], reload);
	gulp.watch(['*.html'], reload);
	gulp.watch(['js/*.js'], reload);
});

/*
 * Compile sass into Css & auto-inject into browsers
 */
gulp.task('css', function() {
  return gulp.src('components/**/*.css')
    .pipe(concatCss("style.css"))
    .pipe(gulp.dest('css/'));
});

/*
 * Compile sass, filter the results, inject CSS into all browsers.
 */

gulp.task('default', ['server']);
