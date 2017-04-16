var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');

gulp.task('build', shell.task(
'gitbook build docs public'
));

gulp.task('deploy', function() {
return gulp.src('./conversor/*')
.pipe(ghPages());
});

gulp.task('deploypush', ['deploy'], function() {
  return gulp.src('./conversor/*')
  //.pipe(ghPages(['git@github.com:ULL-ESIT-DSI-1617/estudiar-las-rutas-en-expressjs-andrea-carlos-35l1.git']))
  .pipe(ghPages(['git@github.com:alu0100826999/prueba.git']))
})
    
gulp.task('serve', shell.task(
  //'cd ..'+
  'gitbook serve docs public'
));
