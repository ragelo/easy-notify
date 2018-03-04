const gulp = require('gulp');
const server = require('gulp-develop-server');
const gulpTS = require('gulp-typescript');
const serverProject = gulpTS.createProject('./server/src/tsconfig.app.json');

gulp.task('build-server', function() {
  return gulp.src('server/src/**/*.ts').pipe(serverProject()).js.pipe(gulp.dest('server/lib'));
});

gulp.task('watch',
  gulp.series('build-server', function() {
    server.listen({
      path: 'server/lib/index.js',
    });
    const watcher = gulp.watch('./server/src/**.ts', {delay: 500}, () => {
      gulp.series('build-server', server.restart);
    });
    watcher.on('change', function(path, stats) {
      console.log('File ' + path + ' was changed');
    });

    watcher.on('unlink', function(path) {
      console.log('File ' + path + ' was removed');
    });
  })
);

gulp.task('build', gulp.series('build-server'));

gulp.task('default', gulp.series('build'));
