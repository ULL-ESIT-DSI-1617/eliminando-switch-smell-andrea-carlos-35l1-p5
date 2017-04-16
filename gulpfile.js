var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
return gulp.src('./conversor/**/*')
.pipe(ghPages());
});

gulp.task('deploypush', ['deploy'], function() {
  return gulp.src('./conversor/**/*')
  .pipe(ghPages(['git@github.com:ULL-ESIT-DSI-1617/eliminando-switch-smell-andrea-carlos-35l1-p5.git']))
})
    
gulp.task('serve', shell.task(
  'gitbook serve docs public'
));
