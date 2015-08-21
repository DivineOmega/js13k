var gulp = require('gulp'),
zip = require('gulp-zip'),
watch = require('gulp-watch'),
jshint = require('gulp-jshint'),
gp_concat = require('gulp-concat'),
gp_uglify = require('gulp-uglify'),
imageop = require('gulp-image-optimization'),
minifyHTML = require('gulp-minify-html'),
rename = require('gulp-rename'),
runSequence = require('run-sequence');

var zip_files = ['js13k.js', 'index.html'], //Files to be added to the zip folder use "<directory goes here>/*" for all files inside the directory
	js_files = ['convergame/convergame.js', 'scenes/*'], //All your JS files to be combined and minified
	img_files = ['assets/*.png','assets/*.jpg','src/**/*.gif','assets/*.jpeg'];

gulp.task('zip', function () {
    return gulp.src(zip_files, {base: "."})
        .pipe(zip('js13k.zip'))
        .pipe(gulp.dest('build'));
});

//Todo: Test to see if it'll override images
gulp.task('images', function(cb) {
    gulp.src(img_files).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('assets')).on('end', cb).on('error', cb);
});

gulp.task('build-js', function() {
	return gulp.src(js_files)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(gp_concat('js13k.js'))
		.pipe(gulp.dest('./'))
		.pipe(gp_uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('build-html', function() { 
  return gulp.src('./index.unmin.html')
    .pipe(minifyHTML())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
});

gulp.task('build-js', function() {
	return gulp.src(js_files)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(gp_uglify())
		.pipe(gp_concat('js13k.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('build-dev', function() {
	return gulp.src(js_files)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(gp_concat('js13k.js'))
		.pipe(gulp.dest('./'));
});

//Legacy 'build' alias for build-dev task
gulp.task('build', ['build-dev']);
gulp.task('watch', function () {

	watch(js_files, function () {
		runSequence('build-dev', 'zip');
	});

	watch('./index.unmin.html', function () {
		runSequence('build-html', 'zip');
	});
});