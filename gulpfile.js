var gulp = require('gulp');
var babel = require('gulp-babel');
var minifyCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var browserSync = require('browser-sync').create();

// Minify CSS
gulp.task('minify-css', function() {
  gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./dist/css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'));
});

// Minify JavaScript
gulp.task('minify-js', function() {
  gulp.src('./src/js/*.js')
  	.pipe(babel())
    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// Minify HTML
gulp.task('minify-html', function() {
  gulp.src('./src/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./dist'));
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    port: 3010,
    server: {
      baseDir: "./dist",
    }
  });
});

// Reload task
gulp.task('reload', function () {
  browserSync.reload();
});


// Default
gulp.task('default', ['minify-css', 'minify-js', 'minify-html', 'browser-sync', 'reload'], function() {

  gulp.watch(['./src/index.html'], ['minify-html', 'reload']);
  gulp.watch(['./src/js/*.js'], ['minify-js', 'reload']);
  gulp.watch(['./src/css/*.css'], ['minify-css', 'reload']);

});
