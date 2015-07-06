'use strict';

var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		concatCss = require('gulp-concat-css'),
  	twig = require('gulp-twig'),
  	prettify = require('gulp-html-prettify'),
		reload = browserSync.reload,
	  src = {
	    html: 'index.twig',
	  };

gulp.task('server',function(){
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
    .pipe(gulp.dest('css/'))
    .on("end", reload);
});

/**
 * Generate templates.
 */
gulp.task('templates', function () {
  return gulp.src(src.html)
    .pipe(twig())
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('./'))
    .on("end", reload);
});


/*
 * Compile sass, filter the results, inject CSS into all browsers.
 */

gulp.task('default', ['templates', 'css', 'server']);
