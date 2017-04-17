const browserSync = require('browser-sync').create();
const gulp = require('gulp');

gulp.task('default', () => {
  gulp.watch('docs/**/*.*').on('change', browserSync.reload);

  browserSync.init({
    port: 3636,
    server: {baseDir: './'},
    startPath: '/docs'
  });
});
