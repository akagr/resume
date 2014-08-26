var gulp = require('gulp'),
jade = require('gulp-jade');

/* File assets */
var source = './src/index.jade';
var dir = './src/*.jade';

/* Uglify all src files */
gulp.task('jade', function() {
  return gulp.src(source)
  .pipe(jade())
  .pipe(gulp.dest('.'));
});

/* Run related task on file change */
gulp.task('watch', function() {
  gulp.watch(dir, ['jade']);
});

/* Run this if no task is specified. i.e. Run all tasks and wait for changes */
gulp.task('default', ['jade', 'watch']);

