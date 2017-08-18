var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var uglifycss = require('gulp-uglifycss');

var uglifyFiles = {
	npmFiles: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/flexslider/2.6.2/jquery.flexslider.js', 'node_modules/angular/angular.min.js', 'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js', 'node_modules/angular-animate/angular-animate.min.js', 'node_modules/oclazyload/dist/ocLazyLoad.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/angular-flexslider/angular-flexslider.js'],
	appFiles: ['assets/js/app.js'],
	cssLibFiles: ['node_modules/bootstrap/dist/css/bootstrap.css', 'node_modules/font-awesome/css/font-awesome.css', 'node_modules/flexslider/flexslider.css']
};

gulp.task('built', ['npm-scripts', 'app-scripts', 'css-libs']);

gulp.task('npm-scripts', function() {
	return gulp.src(uglifyFiles.npmFiles).pipe(concat('npm-scripts.js')).pipe(uglify()).pipe(gulp.dest('dist/js/'));
});

gulp.task('app-scripts', function() {
	return gulp.src(uglifyFiles.appFiles).pipe(concat('app-scripts.js')).pipe(uglify()).pipe(gulp.dest('dist/js/'));
});

gulp.task('css-libs', function() {
	gulp.src(uglifyFiles.cssLibFiles).pipe(concat('css-libs.css')).pipe(uglifycss({
		"maxLineLen" : 80,
		"uglyComments" : true
	})).pipe(gulp.dest('dist/css/'));
});