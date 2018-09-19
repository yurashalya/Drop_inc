const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    gulpIf = require ('gulp-if'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

let config = {
	paths: {
		scss: './src/*.scss',
		html: './public/index.html'
	},
	output: { 
	cssName: 'bundle.min.css',
	path: './public'
	},
	isDevelop: true
}

 gulp.task('scss', function() {
 	return gulp.src(config.paths.scss)
 		.pipe(gulpIf(config.isDevelop, sourcemaps.init()))
 		.pipe(sass())
 		.pipe(concat(config.output.cssName))
 		.pipe(autoprefixer())
 		.pipe(gulpIf(!config.isDevelop, clean()))
 		.pipe(gulpIf(config.isDevelop, sourcemaps.write()))
 		.pipe(gulp.dest(config.output.path))
 		.pipe (browserSync.stream());
 })

 gulp.task('serve', function() {
 	browserSync.init({
 		server: {
 			baseDir: config.output.path
 		}
 	});

 	gulp.watch(config.paths.scss, ['scss']);
 	gulp.watch(config.paths.html).on('change', browserSync.reload);
 })

 gulp.task('default', ['scss', 'serve']);