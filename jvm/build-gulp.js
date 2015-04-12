var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var less = require('gulp-less');
var autoprefixer = require('autoprefixer-core');

gulp.src('./less/id7.less')
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(postcss([
    autoprefixer({})
  ]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist/css'));
