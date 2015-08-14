var gulp = require('gulp'),
zip = require('gulp-zip'),
gp_concat = require('gulp-concat'),
gp_uglify = require('gulp-uglify');

var zip_files = ['js13k.js', 'index.html'],
	js_files = ['convergame/convergame.js', 'scenes/*'];

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