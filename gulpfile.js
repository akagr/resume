var gulp = require('gulp'),
jade = require('gulp-jade');
minifyCss = require('gulp-minify-css');

/* File assets */
var source = './src/index.jade';
var dir = './src/*.jade';

var css = './src/css/*.css'

/* Uglify all src files */
gulp.task('css', function() {
  return gulp.src(css)
  .pipe(minifyCss())
  .pipe(gulp.dest('./build/css'));
});

/* Uglify all src files */
gulp.task('jade', function() {
  return gulp.src(source)
  .pipe(jade())
  .pipe(gulp.dest('.'));
});

/* Run related task on file change */
gulp.task('watch', function() {
  gulp.watch(dir, ['jade']);
  gulp.watch(css, ['css']);
});

/* Run this if no task is specified. i.e. Run all tasks and wait for changes */
gulp.task('default', ['jade', 'css', 'watch']);

