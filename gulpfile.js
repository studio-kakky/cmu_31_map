var gulp = require('gulp');
var DESTDIR = 'dest/';

gulp.task('copy:reveal', function() {
  return gulp.src([
    'bower_components/reveal.js/css/**/*.*',
    'bower_components/reveal.js/js/**/*.*',
    'bower_components/reveal.js/lib/**/*.*',
    'bower_components/reveal.js/plugin/**/*.*'
  ],
  { base: 'bower_components/reveal.js/' })
  .pipe(gulp.dest(DESTDIR+'lib/reveal'));
});

gulp.task('copy:html', function() {
  return gulp.src('presentation/src/**/*.*')
    .pipe(gulp.dest(DESTDIR));
});

gulp.task('watch', function() {
  gulp.watch('presentation/src/**/*.*',['copy:html']);
});

gulp.task('default',['copy:reveal','copy:html','watch']);
