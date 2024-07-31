const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');

// Minify CSS
gulp.task('minify-css', () => {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'));
});

// Minify JavaScript
gulp.task('minify-js', () => {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Minify HTML
gulp.task('minify-html', () => {
  return gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// Copy Images
gulp.task('copy-images', () => {
  return gulp.src('assets/images/**/*')
    .pipe(gulp.dest('dist/images'));
});

// Default Task
gulp.task('default', gulp.parallel('minify-css', 'minify-js', 'minify-html', 'copy-images'));
