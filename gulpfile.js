var gulp = require('gulp'),
zip = require('gulp-zip'),
watch = require('gulp-watch'),
jshint = require('gulp-jshint'),
gp_concat = require('gulp-concat'),
gp_uglify = require('gulp-uglify');

var zip_files = ['js13k.js', 'index.html'], //Files to be added to the zip folder use "<directory goes here>/*" for all files inside the directory
	js_files = ['convergame/convergame.js', 'scenes/*']; //All your JS files to be combined and minified

gulp.task('zip', function () {
    return gulp.src(zip_files, {base: "."})
        .pipe(zip('js13k.zip'))
        .pipe(gulp.dest('build'));
});

gulp.task('build', function() {
	return gulp.src(js_files)
		.pipe(gp_concat('js13k.js'))
		.pipe(gulp.dest('./'))
		.pipe(gp_uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
	gulp.watch(js_files).on('change', function(file) {
	    return gulp.src(file.path)
		        .pipe(jshint())
		        .pipe(jshint.reporter('default'))
		        .pipe(gp_concat('game.js'))
				.pipe(gulp.dest('./'))
				.pipe(gp_uglify())
				.pipe(gulp.dest('./'));
	});
});