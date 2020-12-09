const gulp = require('gulp');
const preprocess = require('gulp-preprocess');
const clean = require('gulp-clean');
const newer = require('gulp-newer');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

const configuredExtensions = [];

gulp.task('js', () => {
  configuredExtensions.push('js');
  return gulp.src(['src/**/*.js', '!src/**/node_modules/', '!src/**/node_modules/**/*']).pipe(newer('bin')).pipe(preprocess()).pipe(gulp.dest('bin'));
});

gulp.task('ts', () => {
  configuredExtensions.push('ts');
  return gulp
    .src(['src/**/*.ts', '!src/**/node_modules/', '!src/**/node_modules/**/*'])
    .pipe(newer('bin'))
    .pipe(preprocess())
    .pipe(tsProject())
    .pipe(gulp.dest('bin'));
});

gulp.task('images', () => {
  configuredExtensions.push('png');
  configuredExtensions.push('jpg');
  configuredExtensions.push('jpeg');
  configuredExtensions.push('gif');
  configuredExtensions.push('tif');
  return gulp
    .src(['src/**/*.{png,jpg,jpeg,gif,tif}', '!src/**/node_modules/', '!src/**/node_modules/**/*'])
    .pipe(newer('bin'))
    .pipe(gulp.dest('bin'));
});

gulp.task('pretty-data', () => {
  configuredExtensions.push('xml');
  configuredExtensions.push('json');
  configuredExtensions.push('xlf');
  configuredExtensions.push('svg');
  return gulp.src(['src/**/*.{xml,json,xlf,svg}', '!src/**/node_modules/', '!src/**/node_modules/**/*']).pipe(newer('bin')).pipe(gulp.dest('bin'));
});

gulp.task('copy', () => {
  return gulp
    .src(['src/**/*', `!src/**/*.{${configuredExtensions.join(',')}}`, '!src/**/node_modules/', '!src/**/node_modules/**/*'])
    .pipe(newer('bin'))
    .pipe(gulp.dest('bin'));
});

gulp.task('clean', () => {
  return gulp.src('bin').pipe(clean());
});

gulp.task('default', gulp.parallel('js', 'ts', 'images', 'pretty-data', 'copy'));
gulp.task('build', gulp.series('default'));
gulp.task('rebuild', gulp.series('clean', 'default'));
