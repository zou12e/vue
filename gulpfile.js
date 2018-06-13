const gulp = require('gulp');
const livereload = require('gulp-livereload');

gulp.task('watch', function() {
    livereload.listen();

    gulp.watch([
         'demo/**/*.html'
        ], function(event) {
            livereload.changed(event.path);
        });

});