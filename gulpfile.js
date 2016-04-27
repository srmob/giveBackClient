var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var uglify = require('gulp-uglify');
var foreach = require('gulp-foreach');
var htmlmin = require('gulp-htmlmin');
var notify = require("gulp-notify");
var preen = require('preen');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var path = require('path');
var del = require('del');

var paths = {
  sass: ['./scss/**/*.scss'],
  index: 'app/index.html',
  scripts: ['app/js/app.js', 'app/js/**/*.js'],
  lib: 'www/lib/**/*.*'
};

gulp.task('default', ['sass','index','scripts','lib']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('index', function() {
    return gulp.src(paths.index)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./www/"))
        .pipe(notify({ message: 'Index builded' }));
});

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(concat("app.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./www/build/"))
        .pipe(rename('app.min.js'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest("./www/build/"))
        .pipe(notify({ message: 'Scripts builded' }));
});

gulp.task('lib', function(done) {
    //https://forum.ionicframework.com/t/how-to-manage-bower-overweight/17997/10?u=jdnichollsc
    preen.preen({}, function() {
        gulp.src('').pipe(notify({ message: 'Lib builded' }));
        done();
    });
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.index, ['index']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.lib, ['lib']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
