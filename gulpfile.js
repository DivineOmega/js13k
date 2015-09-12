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

var zip_files = ['js13k.js', 'index.html', 'assets/sprites/animals/*'], //Files to be added to the zip folder use "<directory goes here>/*" for all files inside the directory
	js_files = ['lib/**/*.js', 'convergame/convergame.js', 'scenes/*', 'objects/*'], //All your JS files to be combined and minified
	img_files = ['assets/*.png','assets/*.jpg','src/**/*.gif','assets/*.jpeg'];


//Zip up the JS/HTML required for the game
gulp.task('zip', function () {
    return gulp.src(zip_files, {base: "."})
        .pipe(zip('js13k.zip'))
        .pipe(gulp.dest('build'));
});


//Run this task once the game is ready to ship!
gulp.task('publish', function() {
	runSequence('build-js', 'build-html', 'zip');
});

//Compress Images
//Todo: Test to see if it'll override images
gulp.task('images', function(cb) {
    gulp.src(img_files).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('assets')).on('end', cb).on('error', cb);
});

//Minify the HTML
gulp.task('build-html', function() { 
  return gulp.src('./index.unmin.html')
    .pipe(minifyHTML())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
});

//Build the JS and minify
gulp.task('build-js', function() {
	return gulp.src(js_files)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(gp_uglify())
		.pipe(gp_concat('js13k.js'))
		.pipe(gulp.dest('./'));
});

//Build the JS without minifying
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
		runSequence('build-dev');
	});

	watch('./index.unmin.html', function () {
		runSequence('build-html');
	});

	//Todo: Watch for image changes
});