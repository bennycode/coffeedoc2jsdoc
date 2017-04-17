const browserSync = require('browser-sync').create();
const gulp = require('gulp');

gulp.task('default', () => {
  gulp.watch('app/**/*.*').on('change', browserSync.reload);

  browserSync.init({
    port: 3636,
    server: {baseDir: './'},
    startPath: '/app'
  });
});