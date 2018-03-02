const gulp = require('gulp');
const server = require('gulp-develop-server');
const gulpTS = require('gulp-typescript');


const serverProject = gulpTS.createProject('./server/src/tsconfig.app.json');

gulp.task('start-server', ['build-server'], () => {
  server.listen({
    path: 'server/lib/index.js'
  });
});

gulp.task('build-server', () => {
  return serverProject.src()
    .pipe(serverProject())
    .js.pipe(gulp.dest('server/lib'));
});

gulp.task('watch-server', ['start-server'], () => {
  gulp.watch(['./server/src/**.ts'], ['build-server', server.restart])
});


gulp.task('watch', ['watch-server']);

gulp.task('build', ['build-server']);

gulp.task('default', ['build']);
