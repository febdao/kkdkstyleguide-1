'use strict';

var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		concatCss = require('gulp-concat-css'),
  	twig = require('gulp-twig'),
  	prettify = require('gulp-html-prettify'),
		reload = browserSync.reload,
	  src = {
	    html: 'includes/*.twig',
	    page: '*.twig',
	    htmlcompo: 'components/**/*.html',
	    css: 'components/**/*.css',
	  };

gulp.task('server',['templates', 'css'],function(){
	browserSync({
		notify: false,
		server: {
			baseDir: '.'
		}
	});
	gulp.watch(src.css, ['css']);
	gulp.watch([src.html,src.page,src.htmlcompo], ['templates']);
	gulp.watch(['js/*.js'], reload);
  gulp.watch(['css/app.css'], reload);
	gulp.watch(['css/thanh.css'], reload);
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
  return gulp.src(src.page)
    .pipe(twig())
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('./'))
    .on("end", reload);
});


/*
 * Compile inject CSS into all browsers.
 */

gulp.task('default', ['server']);
