const gulp = require('gulp');
// const babel = require("gulp-babel");
const babelify = require('babelify');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const source = require('vinyl-source-stream');
// const concat = require("gulp-concat");
const browserify = require('browserify');
const cssBase64 = require('gulp-css-base64');
const inlinesource = require('gulp-inline-source');
const browserSync = require('browser-sync');

const { reload } = browserSync;

gulp.task('es6', () => browserify({ entries: 'src/main.js' })
  .transform(babelify.configure({
    presets: ['es2015'], compact: true,
  }))
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('js'))
  .pipe(reload({ stream: true })));

gulp.task('css', () => gulp.src('src/style.less')
  .pipe(less())
  .pipe(autoprefixer({
    browsers: ['last 20 versions'],
    cascade: false,
  }))
  .pipe(gulp.dest('css'))
  .pipe(reload({ stream: true })));

gulp.task('img-to-base64', () => gulp.src('css/style.css')
  .pipe(cssBase64({
    maxWeightResource: 3276800,
  }))
  .pipe(gulp.dest('css/img-to-base64')));

gulp.task('inline-build', () => gulp.src('index.html')
  .pipe(inlinesource())
  .pipe(gulp.dest('inline_build')));
gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './',
    },
    port: 8080,
    open: true,
    notify: false,
  });
});

gulp.task('start', ['es6', 'css', 'browserSync'], () => {
  gulp.watch('src/**/*.js', ['es6']);
  gulp.watch('src/style.less', ['css']);
});
