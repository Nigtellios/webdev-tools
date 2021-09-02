const gulp = require('gulp');
const webpack = require('webpack-stream');
const { parallel, series } = require('gulp');

const { scripts } = require('./tasks/scripts');
const { render } = require('./tasks/render');
const { templating } = require('./tasks/templating');

// https://stackoverflow.com/questions/50505275/gulp4-assertionerror-task-never-defined-when-calling-or-importing-tasks

gulp.task('default', function () {
  return gulp
    .src('tasks/entry.js')
    .pipe(
      webpack({
        // Any configuration options...
      }),
    )
    .pipe(gulp.dest('dist/'));
});

/** Run by `gulp dev` */
gulp.task('dev', function () {
  return series(parallel(templating, render, scripts));
});

gulp.task('build', function () {
  return eries(parallel(templating, render, scripts));
});
