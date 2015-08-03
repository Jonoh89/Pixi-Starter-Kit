import gulp from 'gulp';
import jshint from 'gulp-jshint';
import jscs from 'gulp-jscs';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import gutil from 'gulp-util';

const files = {
  javascript: ['**/*.js', '!public/**/*', '!node_modules/**/*']
};

gulp.task('jshint', () => {
  return gulp.src(files.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', () => {
  return gulp.src(files.javascript)
    .pipe(jscs());
});

gulp.task('lint', ['jshint', 'jscs']);

const opts = Object.assign({}, watchify.args, {
  entries: ['./game/js/main.js'],
  debug: true
});
const b = watchify(browserify(opts));
b.transform(babelify.configure({experimental: true}));

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public'));
}

gulp.task('dev', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

gulp.task('default', ['dev']);
